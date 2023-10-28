import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Table from "../../../components/Admin/Table";
import { GetProUsers } from "../../../components/apis/adminApi";
import addICon from "../../../assets/addIcon.svg";
import { Dropdown, Space, Modal, Form, Button, Spin, Input, } from 'antd';
import { LogoutIcon } from "./svg";

const Verified = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addProUser, setAddProUSer] = useState(false)

  const getUsers = async (pageNumber) => {
    setIsLoading(true);

    const userRes = await GetProUsers(pageNumber);

    if (!userRes.status === 0 || !userRes.data) {
      toast.error("Error Fetching Users");
      setIsLoading(false);
      setUsers([]);
      return;
    }

    const tempUsers = [];

    userRes.data.map((user) => {
      const userData = [
        user.name,
        user.level,
        `₦${JSON.parse(user.wallets).real_wallet.toLocaleString()}`,
        <>
          <button> Edit </button>
          <button> Delete </button>
        </>,
      ];
      tempUsers.push(userData);
      return true;
    });

    setIsLoading(false);
    setUsers(tempUsers);
  };

  useEffect(() => {
    getUsers(1);
  }, []);



  return (
    <>
      <Table
        classes={"bordered hover"}
        title={"Pro Users"}
        tableHeaders={["S/N", "Name", "Level", "Wallet", "Actions"]}
        tableData={users}
        isLoading={isLoading}
      />
      
      

                <button onClick={() => {
                    setAddProUSer(true);
                }} className="new-button-set">
                  
                   
                    Add New Pro-trader
                </button>
                <Modal
                centered
                open={addProUser}
                onOk={() => setAddProUSer(false)}
                onCancel={() => setAddProUSer(false)}
                className="our-modal add-page-modal"
                footer={null}
            >
                <div style={{ textAlign: "center" }}>
                    <h4 style={{ fontSize: "2rem" }}>Add New Pro-Trader</h4>
                    <p>Fill the fields below to add a new Pro-Trader</p>
                </div>
                <Form layout="vertical">
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <Form.Item name="name" label="Pro-trader's name" className="heights">
                            <Input placeholder="Enter Pro-trader's name" />
                        </Form.Item>

                        <Form.Item name="email" label="Pro-trader's Email" className="heights">
                            <Input placeholder="Enter Pro-trader's Email" />
                        </Form.Item>
                    </div>

                    <Form.Item name="password" label="Password" className="heights">
                        <Input placeholder="Enter Pro-trader's password" />
                    </Form.Item>

                      <Form.Item name="copy_code_percentage" label="Commission Percentage" className="heights">
                        <Input placeholder="Enter Pro-trader's commission percentage" />
                    </Form.Item>

                    <Form.Item name="pro_trader_description" label="Pro Trader Description" className="heights">
                        <Input placeholder="Enter Pro Trader Description" />
                    </Form.Item>

                    
                   

            

                    <div className="pt-lg-5 pt-4">
                        <Button
                            htmlType="submit"
                            style={{ background: '#29abe2', color: '#FFF' }}
                        >

                            <> Add New Pro-trader</>

                        </Button>
                    </div>

                    {/* <Button
            htmlType="submit"
            style={{ background: '#7D0003', color: '#FFF' }}
            className="w-100 mt-4 mb-4"
          >
            Add Member
          </Button> */}
                </Form>
            </Modal>
           
    </>
  );
};

export default Verified;
