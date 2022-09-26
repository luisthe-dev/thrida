import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import DashHeader from "../../components/Dash/DashHeader";
// import MainSidebar from "../../components/MainSidebar";

const Profile = () => {
  return (
    <>
      {/* <MainSidebar /> */}
      <DashHeader />
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
              <p className="activeSelector"> Personal Information </p>
              <p> Contact Information </p>
              <p> Password </p>
              <p> News and Notifications </p>
              <p> Connected Accounts </p>
              <p> Danger Zone </p>
            </div>
          </div>

          <div className="ProfilePageBodySections">
            <div className="ProfilePageBodySection" data-sectionShown="true">
              <h3> Personal Information </h3>
              <p> Update your personal information </p>
              <form>
                <label> First Name </label>
                <input type="text" />
                <label> Last Name </label>
                <input type="text" />
                <label> Date of Birth </label>
                <input type="date" />
                <label> Gender </label>
                <input type="gender" />
                <button> save </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
