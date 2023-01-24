import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Forgot = () => {
  const [userMail, setUserMail] = useState("");
  const [loading, setLoading] = useState(false);
  const myNavigate = useNavigate();

  const userPassForgot = async (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="mainAuthContainer">
      <div className="authContainer">
        <div className="authHeader">
          <AiOutlineArrowLeft onClick={() => myNavigate(-1)} />
          <div className="authHeaderText">
            <img src="/public_assets/images/Thrida-01-02.png" alt="Thrida" />
          </div>
        </div>
        <div className="authForm">
          <form onSubmit={userPassForgot}>
            <label> Email Address </label>
            <div className="authFormInputContainer">
              <BiEnvelope />
              <input
                type="email"
                value={userMail}
                onInput={(e) => setUserMail(e.target.value)}
                placeholder="Email Address"
                required
              />
            </div>
            <button type="submit" disabled={loading} className={"loadingBtn"}>
              {loading ? <FiLoader /> : `Request Reset`}
              {loading && ` Hold On`}
            </button>
          </form>
        </div>
        <div className="authFooter">
          <p>
            New User? <Link to="/signup">Get A Free Account</Link>
          </p>
        </div>
      </div>
      <div className="floatingFooter">2022 &copy; Thrida</div>
    </div>
  );
};

export default Forgot;
