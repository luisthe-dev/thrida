import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SignInAdmin } from "../../../components/apis/adminApi";
import {
  setAdminAuthToken,
  setAdminDetails,
  setAdminLoggedIn,
} from "../../../redux/adminStore";

const AdminSignIn = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const myNavigate = useNavigate();
  const myDispatch = useDispatch();

  const userSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const signInResponse = await SignInAdmin(userId, userPassword);
    if (signInResponse.status === 1) {
      toast.success("Signed In Successfully");
      myDispatch(setAdminAuthToken(signInResponse.data.access_token));
      myDispatch(setAdminLoggedIn(true));
      myDispatch(
        setAdminDetails({
          name: signInResponse.data.user.name,
          email: signInResponse.data.user.email,
        })
      );
      myNavigate("/admin/dashboard");
      setLoading(false);
    } else {
      toast.error("Invalid Credentials");
      setLoading(false);
    }
  };
  return (
    <div className="AdminAuthContainer">
      <form onSubmit={userSignIn} className="AdminAuthBlock">
        <label> User ID </label>
        <input
          type={"text"}
          placeholder={"User ID"}
          value={userId}
          onInput={(e) => setUserId(e.target.value)}
        />
        <label> Password </label>
        <input
          type={"password"}
          placeholder={"Password"}
          value={userPassword}
          onInput={(e) => setUserPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default AdminSignIn;
