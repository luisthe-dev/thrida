import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { WiSnowflakeCold } from "react-icons/wi";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";
import { GetUserDetails } from "../../components/apis/userApi";

const Profile = () => {
  const [present, setPresent] = useState("pi");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    GetUserDetails()
      .then((response) => {
        if (response?.status === 1) {
          setFirstName(response.data.name.split(" ")[0]);
          setLastName(response.data.name.split(" ")[1]);
          setEmail(response.data.email);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="ProfilePageContainer">
        <div className="ProfilePageHeader">
          <div className="ProfilePageHeaderImageContainer">
            <div className="ProfilePageHeaderImageContainerOverlay"></div>
            <div className="ProfilePageHeaderImage">
              <AiOutlineUser />
              <p> Change Picture </p>
            </div>
          </div>
          <p> Full Name </p>
        </div>
        <div className="ProfilePageBody">
          <div className="ProfilePageBodyHeader">
            <div className="ProfilePageBodySectionSelectors">
              <p
                className={present === "pi" ? "activeSelector" : ""}
                onClick={() => setPresent("pi")}
              >
                Personal Information
              </p>
              <p
                className={present === "ci" ? "activeSelector" : ""}
                onClick={() => setPresent("ci")}
              >
                Contact Information
              </p>
              <p
                className={present === "p" ? "activeSelector" : ""}
                onClick={() => setPresent("p")}
              >
                Password
              </p>
              <p
                className={present === "nan" ? "activeSelector" : ""}
                onClick={() => setPresent("nan")}
              >
                News and Notifications
              </p>
              <p
                className={present === "ca" ? "activeSelector" : ""}
                onClick={() => setPresent("ca")}
              >
                Connected Accounts
              </p>
              <p
                className={present === "dz" ? "activeSelector" : ""}
                onClick={() => setPresent("dz")}
              >
                Danger Zone
              </p>
            </div>
          </div>

          <div className="ProfilePageBodySections">
            <div
              className="ProfilePageBodySection"
              data-sectionshown={present === "pi" && "true"}
            >
              <h3> Personal Information </h3>
              <p> Update your personal information </p>
              <form>
                <label> First Name </label>
                <input
                  type="text"
                  value={firstName}
                  onInput={(e) => setFirstName(e.target.value)}
                />
                <label> Last Name </label>
                <input
                  type="text"
                  value={lastName}
                  onInput={(e) => setLastName(e.target.value)}
                />
                <label> Date of Birth </label>
                <input type="date" />
                <label> Gender </label>
                <input type="gender" />
                <button> save </button>
              </form>
            </div>

            <div
              className="ProfilePageBodySection"
              data-sectionshown={present === "ci" && "true"}
            >
              <h3> Contact Information </h3>
              <p> Update your contact information </p>
              <form>
                <label> Email Address </label>
                <input
                  type="email"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                />
                <label> Phone Number </label>
                <input type="tel" />
                <button> save </button>
              </form>
            </div>

            <div
              className="ProfilePageBodySection"
              data-sectionshown={present === "p" && "true"}
            >
              <h3> Update Password </h3>
              <p> Change your password </p>
              <form>
                <label> Old Password </label>
                <input type="password" />
                <label> New Password </label>
                <input type="password" />
                <button> save </button>
              </form>
            </div>

            <div
              className="ProfilePageBodySection"
              data-sectionshown={present === "nan" && "true"}
            >
              <h3> News And Notifications </h3>
              <p> Update notification preferences </p>
              <form>
                <label>
                  <input type={"checkbox"} /> Recieve newsletter and promotions
                </label>
                <button> save </button>
              </form>
            </div>

            <div
              className="ProfilePageBodySection"
              data-sectionshown={present === "ca" && "true"}
            >
              <h3> Connected Account </h3>
              <p> Link or Unlink social accounts </p>
              <button className="profilePgBtn fbButton">
                <CgFacebook />
                <label> Link</label>
              </button>
              <button className="profilePgBtn ggButton">
                <FcGoogle /> <label> Link</label>
              </button>
            </div>

            <div
              className="ProfilePageBodySection"
              data-sectionshown={present === "dz" && "true"}
            >
              <h3> Danger Zone </h3>
              <p> Be careful what you do here </p>
              <button className="profilePgBtn frznButton">
                <WiSnowflakeCold /> <label>Freeze Account</label>
              </button>
              <button className="profilePgBtn delButton">
                <BiTrash /> <label>Delete Account</label>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
