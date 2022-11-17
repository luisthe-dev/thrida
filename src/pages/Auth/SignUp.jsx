import { Link, useNavigate } from "react-router-dom";
import { RiUser3Line } from "react-icons/ri";
import { GiOilySpiral } from "react-icons/gi";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import {
  AiOutlineArrowLeft,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useState } from "react";
import { SignUpUser } from "../../components/apis/userApi";
import { toast } from "react-toastify";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const myNavigate = useNavigate();

  const userSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const signUpResponse = await SignUpUser(userName, userMail, userPassword);
    if (signUpResponse.status === 1) {
      toast.success("Signed Up Successfully");
      setLoading(false);
    } else {
      toast.error(signUpResponse.message);
      setLoading(false);
    }
  };

  return (
    <div className="mainAuthContainer">
      <div className="authContainer">
        <div className="authHeader">
          <AiOutlineArrowLeft onClick={() => myNavigate(-1)} />
          <div className="authHeaderText">
            <GiOilySpiral /> <p>Thrida</p>
          </div>
        </div>
        <div className="authForm">
          <form onSubmit={userSignUp}>
            <label> Full Name </label>
            <div className="authFormInputContainer">
              <RiUser3Line />
              <input
                type="text"
                value={userName}
                onInput={(e) => setUserName(e.target.value)}
                placeholder="Full Name"
                required
              />
            </div>
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
            <label> Password </label>
            <div className="authFormInputContainer">
              <BiLockAlt />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={userPassword}
                onInput={(e) => setUserPassword(e.target.value)}
                required
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <AiOutlineEye onClick={() => setShowPassword(!showPassword)} />
              )}
            </div>
            <button type="submit" disabled={loading}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="authFooter">
          <p>
            Already Have An Account?{" "}
            <Link to="/signin">Access Your Account</Link>
          </p>
        </div>
      </div>
      <div className="floatingFooter">2022 &copy; Thrida</div>
    </div>
  );
};

export default SignUp;
