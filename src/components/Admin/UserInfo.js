import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";
import {
  deleteSingleUser,
  freezeSingleUser,
  getSingleUser,
  updateSingleUser,
} from "../apis/adminApi";

const UserInfo = ({ userId, setUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    level: "",
    is_pro: false,
    is_frozen: false,
    wallets: {
      demo: 0,
      real: 0,
      tourney: 0,
    },
  });

  const freezeUser = async () => {
    setIsLoading(true);
    const freezeRes = await freezeSingleUser(userId);
    freezeRes
      ? toast.success(freezeRes.message)
      : toast.error(freezeRes.message);
    await getUserDetails();
    setIsLoading(false);
  };

  const deleteUser = async () => {
    setIsLoading(true);
    const deleteRes = await deleteSingleUser(userId);
    deleteRes
      ? toast.success(deleteRes.message)
      : toast.error(deleteRes.message);
    setUser(0);
  };

  const saveUser = async () => {
    setIsLoading(true);
    const userData = {
      name: userDetails.name,
      email: userDetails.email,
      level: userDetails.level,
      is_pro: userDetails.is_pro,
      is_frozen: userDetails.is_frozen,
      wallets: JSON.stringify({
        demo_wallet: userDetails.wallets.demo,
        real_wallet: userDetails.wallets.real,
        tournament_wallet: userDetails.wallets.tourney,
      }),
    };
    const saveRes = await updateSingleUser(userId, userData);
    saveRes
      ? toast.success(saveRes.data.message)
      : toast.error(saveRes.data.message);
    await getUserDetails();
    setIsLoading(false);
  };

  const getUserDetails = async () => {
    setIsLoading(true);
    const userRes = await getSingleUser(userId);
    const userData = userRes.data;
    const userWallets = JSON.parse(userData.wallets);
    setUserDetails({
      name: userData.name,
      email: userData.email,
      level: userData.level,
      is_pro: userData.is_pro,
      is_frozen: userData.is_frozen,
      wallets: {
        demo: userWallets.demo_wallet,
        real: userWallets.real_wallet,
        tourney: userWallets.tournament_wallet,
      },
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getUserDetails();
    return;
  }, [userId]);

  return (
    <>
      <div className="userInfoMainContainer">
        <div className="userInfoMainBlock">
          {isLoading ? (
            <div className="loaderIcon">
              <FiLoader />
            </div>
          ) : (
            <>
              <div className="userInfoClose">
                <AiOutlineCloseCircle onClick={() => setUser(0)} />
              </div>
              <div className="userInfoMainBlocks">
                <div className="userInfoMainBlockInput">
                  <p> Name </p>
                  <input
                    type={"text"}
                    placeholder={"Name"}
                    value={userDetails.name}
                    onInput={(e) =>
                      setUserDetails({ ...userDetails, name: e.target.value })
                    }
                  />
                </div>
                <div className="userInfoMainBlockInput">
                  <p> Email </p>
                  <input
                    type={"email"}
                    placeholder={"Email"}
                    value={userDetails.email}
                    onInput={(e) =>
                      setUserDetails({ ...userDetails, email: e.target.value })
                    }
                  />
                </div>
                <div className="userInfoMainBlockInput">
                  <p> Level </p>
                  <select
                    defaultValue={userDetails.level}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, level: e.target.value })
                    }
                  >
                    <option>Free</option>
                    <option>Silver</option>
                    <option>Gold</option>
                  </select>
                </div>
                <div className="userInfoMainBlockInput">
                  <p> Pro Account </p>
                  <select
                    defaultValue={userDetails.is_pro}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, is_pro: e.target.value })
                    }
                  >
                    <option value={true}> Yes </option>
                    <option value={false}> No </option>
                  </select>
                </div>
                <div className="userInfoMainBlockInput">
                  <p> Wallets </p>
                  <input
                    type={"number"}
                    placeholder={"Demo Balance"}
                    value={userDetails.wallets.demo}
                    onInput={(e) =>
                      setUserDetails({
                        ...userDetails,
                        wallets: {
                          ...userDetails.wallets,
                          demo: e.target.value,
                        },
                      })
                    }
                  />
                  <input
                    type={"number"}
                    placeholder={"Live Balance"}
                    value={userDetails.wallets.real}
                    onInput={(e) =>
                      setUserDetails({
                        ...userDetails,
                        wallets: {
                          ...userDetails.wallets,
                          real: e.target.value,
                        },
                      })
                    }
                  />
                  <input
                    type={"number"}
                    placeholder={"Tourney Balance"}
                    value={userDetails.wallets.tourney}
                    onInput={(e) =>
                      setUserDetails({
                        ...userDetails,
                        wallets: {
                          ...userDetails.wallets,
                          tourney: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="userInfoMainBlockBtns">
                  <button onClick={freezeUser}>
                    {userDetails.is_frozen ? `Freeze` : `Unfreeze`} Account
                  </button>
                  <button onClick={saveUser}> Save Changes </button>
                  <button onClick={deleteUser}> Delete Account </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
