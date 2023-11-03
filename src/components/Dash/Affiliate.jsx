import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { imageUrl } from "../apis/axios";
import {
  // appliedTourney,
  // applyTourney,
  getActiveTourneys,
} from "../apis/tournamentApi";
import { Dropdown, Space, Modal, Form, Button, Spin, Input, Upload } from 'antd';



const Affilate = ({ active, infoActive, setActive }) => {
    const [tourneyData, setTourneyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addAffliate, setAddAffliate] = useState(false)
  // const [applied, setApplied] = useState([]);

  const myNavigate = useNavigate();

  // const applyToTourney = async (tourneyId) => {
  //   setIsLoading(true);
  //   const applyRes = await applyTourney(tourneyId);
  //   Number(applyRes.status) === 1
  //     ? toast.success("Signed Up For Tournament Successfully")
  //     : toast.error(applyRes.message);
  //   await getTourneys();
  // };

  const readMoreOnTourney = async (tourneyId) => {
    infoActive(tourneyId);
    setActive(false);
  };

  const getTourneys = async () => {
    setIsLoading(true);
    const tradesRes = await getActiveTourneys();
    // const regedRes = await appliedTourney();
    setTourneyData(tradesRes.data);
    // setApplied(regedRes.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getTourneys();
    return;
  }, [active]);
    return(
        <div className={active ? "tradeHistoryPopUp active" : "tradeHistoryPopUp"}>
      <div className="newTourneyBtn">
        <button onClick={() => {
                    setAddAffliate(true);
                }}>
          Become an Affiliate
        </button>
      </div>

         <div className="tourneyHistory">
      
          <p> Are you passionate about trading? Unlock exciting opportunities by becoming our affiliate! Share your unique promo code with fellow traders, and both you and your referrals can enjoy exclusive discounts. Start earning while you help others succeed in the trading world. Join us today! </p>
       
      </div>
      <Modal
                centered
                open={addAffliate}
                onOk={() => setAddAffliate(false)}
                onCancel={() => setAddAffliate(false)}
                className="our-modal add-page-modal"
                footer={null}
            >
                <div style={{ textAlign: "center" }}>
                    <h4 style={{ fontSize: "2rem" }}>Promo Code Request Form</h4>
                    <p>Fill the fields below to request for promo code</p>
                </div>
                <Form layout="vertical">
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <Form.Item name="promotional_channels" label="How do you intend to promote thrida" className="heights"  
                        rules={[
                  {
                required: true,
                message: 'Please input how you intend to promote thrida!',
              },
            ]}>
                            <Input.TextArea placeholder="How do you intend to promote thrida" rows={4} /> 
                        </Form.Item>

                        <Form.Item name="email" label="Social media you intend to promote thrida" className="heights"
                         rules={[
                          {
                            required: true,
                            message: 'Please input your intended social media!',
                          },
                        ]}>
                            <Input placeholder="Social Media" />
                        </Form.Item>
                    </div>

                    <Form.Item
  name="social_media_account_insight"
  label="Upload insights you get in 24hours on your social media account"
  className="heights"
>
  <Upload
    listType="picture-card"
    showUploadList={false}
    action="/your-upload-endpoint"
  >
    <div>Click to upload</div>
  </Upload>
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
      {/* <div className="tourneyHistory">
        {isLoading ? (
          <p> Loading Tournaments ... </p>
        ) : tourneyData.length < 1 ? (
          <p> No Active Tournament! </p>
        ) : (
          tourneyData.map((tourney, key) => (
            <div
              key={key}
              className={"tourneyBlock"}
              style={{
                backgroundImage: `url("${imageUrl}${tourney.image}")`,
              }}
            >
              <div className="tourneyBlockHeader">
                <h5> {tourney.name} </h5>
                <p>{tourney.start_date} </p>
              </div>
              <div className="tourneyBlockFooter">
                <p> ₦{Number(tourney.cash_price).toLocaleString()} </p>
                <div className="tourneyBlockFooterBtns">
                  <button onClick={() => readMoreOnTourney(tourney.id)}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div> */}
    </div>

    )

}

export default Affilate
