import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Table from "../../../components/Admin/Table";
import { GetProUsers } from "../../../components/apis/adminApi";
import addICon from "../../../assets/addIcon.svg";
import { Dropdown, Space, Modal, Form, Button, Spin, Input, } from 'antd';
import { LogoutIcon } from "./svg";
import { RequestPro } from "../../../components/apis/adminApi";

const Verified = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addProUser, setAddProUSer] = useState(false)


  const submitProForm = async (value) => {
    
    setIsLoading(true);
    const copyCodePercentage = parseInt(value.copy_code_percentage, 10); 

    const myProData = {
      name: value.name,
    email: value.email,
    password: value.password,
    copy_code_percentage: copyCodePercentage,
    pro_trader_description: value.pro_trader_description
  };
  console.log(myProData)

  

    const requestRes = await RequestPro(myProData);

    requestRes.status === 1 && toast.success("Request Has Been Submitted");

    setIsLoading(false);
  };


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
                <Form layout="vertical" onFinish={submitProForm}>
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <Form.Item name="name" label="Pro-trader's name" className="heights"  
                        rules={[
              {
                required: true,
                message: 'Please input Pro-trader name!',
              },
            ]}>
                            <Input placeholder="Enter Pro-trader's name" />
                        </Form.Item>

                        <Form.Item name="email" label="Pro-trader's Email" className="heights"
                         rules={[
                          {
                            required: true,
                            message: 'Please input Pro-trader email!',
                          },
                        ]}>
                            <Input placeholder="Enter Pro-trader's Email" />
                        </Form.Item>
                    </div>

                    <Form.Item name="password" label="Password" className="heights"
                     rules={[
                      {
                        required: true,
                        message: 'Please input Pro-trader password!',
                      },
                    ]}>
                        <Input placeholder="Enter Pro-trader's password" />
                    </Form.Item>

                      <Form.Item name="copy_code_percentage" label="Commission Percentage" className="heights"
                       rules={[
                        {
                          required: true,
                          message: 'Please input Commission Percentage!',
                        },
                      ]}>
                        <Input placeholder="Enter Pro-trader's commission percentage" />
                    </Form.Item>

                    <Form.Item name="pro_trader_description" label="Pro Trader Description" className="heights"
                     rules={[
                      {
                        required: true,
                        message: 'Please input pro trader description!',
                      },
                    ]}>
                    <Input.TextArea placeholder="Enter Pro Trader Description" rows={4} /> 
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
