import React, { useEffect } from "react";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";
import Table from "../../../components/Admin/Table";
import {
  GetAllSettings,
  updateSettingsValue,
} from "../../../components/apis/adminApi";

const Settings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [setting, setSetting] = useState("");
  const [value, setValue] = useState("");
  const [settings, setSettings] = useState([]);

  const settingTerms = [
    ["win_algo", "Win Algorithm"],
    ["btc_price", "BTC Price"],
    ["dollar_price", "Dollar Price"],
    ["eth_price", "ETH Price"],
    ["btc_address", "BTC Address"],
    ["eth_address", "ETH Address"],
    ["ltc_price", "LTC Price"],
    ["ltc_address", "LTC Address"],
    ["usdt_erc_price", "USDT ERC Price"],
    ["usdt_erc_address", "USDT ERC Address"],
    ["usdt_trc_price", "USDT TRC Price"],
    ["usdt_trc_address", "USDT TRC Address"],
    ["default_bonus", "Bonus Amount For All Users"],
  ];

  const getSettingsValues = async () => {
    setIsLoading(true);

    const settingRes = await GetAllSettings();

    const tempSettings = [];

    settingRes.data.map((setting) => {
      const settingName = settingTerms.filter(
        (term) => term[0] === setting.setting
      );
      if (settingName.length === 0) return;
      tempSettings.push([settingName[0][1], setting.value]);
      return null;
    });

    setSettings(tempSettings);
    setIsLoading(false);
  };

  const switchSetting = (newSetting) => {
    const filteredSet = settings.filter((setting) => setting[0] === newSetting);
    if (filteredSet.length === 0) return;
    setValue(filteredSet[0][1]);
    setSetting(newSetting);
  };

  useEffect(() => {
    getSettingsValues();
    return;
  }, []);

  const submitSettingForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const filteredSet = settingTerms.filter((term) => term[1] === setting);

    if (filteredSet.length === 0) {
      toast.error("Error Updating Setting");
      return;
    }

    const settingName = filteredSet[0][0];

    const settingData = {
      setting_name: settingName,
      setting_value: value,
    };

    const settingRes = await updateSettingsValue(settingData);

    if (settingRes.status !== 1) {
      toast.error("Error Updating Setting");
      return;
    }

    toast.success("Setting Updated Successfully");
    setSetting("");
    setValue("");

    await getSettingsValues();

    setIsLoading(false);
  };

  return (
    <div className="adminStatTables">
      <div className="adminStatTable">
        <Table
          classes={"hover"}
          title={"Settings"}
          tableHeaders={["S/N", "Setting", "Value"]}
          tableData={settings}
          isLoading={isLoading}
        />
      </div>
      <div className="adminStatTable">
        <h2> Edit Setting </h2>
        <form onSubmit={submitSettingForm}>
          <label> Setting </label>
          <select
            value={setting}
            onChange={(e) => switchSetting(e.target.value)}
          >
            <option disabled value={""}>
              Select Setting
            </option>
            {settingTerms.map((term, index) => (
              <option value={term[1]} key={index}>
                {term[1]}
              </option>
            ))}
          </select>
          <label> Setting Value </label>
          <input
            type={"text"}
            placeholder={"Setting Value"}
            value={value}
            onInput={(e) => setValue(e.target.value)}
          />
          <button disabled={isLoading} type={"submit"} className={"loadingBtn"}>
            {isLoading || setting === "" ? <FiLoader /> : `Edit Setting`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
