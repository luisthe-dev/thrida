import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SignUpAdmin } from "../../../components/apis/adminApi";

const AdminSignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const myNavigate = useNavigate();

  const userSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const signUpResponse = await SignUpAdmin(userId, userEmail, userPassword);
    if (signUpResponse.status === 1) {
      toast.success("Signed Up Successfully");
      setLoading(false);
    } else {
      toast.error(signUpResponse.message);
      setLoading(false);
    }
  };
  return (
    <div className="AdminAuthContainer">
      <form onSubmit={userSignUp} className="AdminAuthBlock">
        <label> User ID </label>
        <input
          type={"text"}
          placeholder={"User ID"}
          value={userId}
          onInput={(e) => setUserId(e.target.value)}
        />
        <label> User Email </label>
        <input
          type={"email"}
          placeholder={"User Email"}
          value={userEmail}
          onInput={(e) => setUserEmail(e.target.value)}
        />
        <label> Password </label>
        <input
          type={"password"}
          placeholder={"Password"}
          value={userPassword}
          onInput={(e) => setUserPassword(e.target.value)}
        />
        <button> Sign Up </button>
      </form>
    </div>
  );
};

export default AdminSignUp;
