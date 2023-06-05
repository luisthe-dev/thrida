import React from "react";
import { Link } from "react-router-dom";

import { IoFilterOutline } from "react-icons/io5";
import { FiUser, FiUserCheck, FiSettings } from "react-icons/fi";
import { BiPowerOff, BiNotepad } from "react-icons/bi";
import { MdWebAsset } from "react-icons/md";

const SideBar = ({ active }) => {
  return (
    <>
      <div
        className={
          active ? "AdminSideBarContainer" : "AdminSideBarContainer LabelHide"
        }
      >
        <Link to="/admin/dashboard/">
          <BiNotepad />
          <span>Overview</span>
        </Link>
        <Link to="/admin/dashboard/users">
          <FiUser />
          <span>Users</span>
        </Link>
        <Link to="/admin/dashboard/verified">
          <FiUserCheck />
          <span>Verified Pros</span>
        </Link>
        <Link to="/admin/dashboard/assets">
          <MdWebAsset />
          <span>Assets</span>
        </Link>
        <Link to="/admin/dashboard/transactions">
          <IoFilterOutline />
          <span>Transactions</span>
        </Link>
        <Link to="/admin/dashboard/settings">
          <FiSettings />
          <span>Settings</span>
        </Link>
        <Link to="/admin/dashboard/withdrawals">
          <BiPowerOff />
          <span>Log Out</span>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
