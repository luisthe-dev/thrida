import { Link, useNavigate } from "react-router-dom";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import {
  AiOutlineArrowLeft,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useState } from "react";
import { SignInUser } from "../../components/apis/userApi";
import { useDispatch } from "react-redux";
import {
  setUserAuthToken,
  setUserWallets,
  setUserDetails,
  setUserLoggedIn,
} from "../../redux/userStore";
import { toast } from "react-toastify";
import { FiLoader } from "react-icons/fi";

const SignIn = () => {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const myNavigate = useNavigate();
  const myDispatch = useDispatch();

  const userSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const signInResponse = await SignInUser(userMail, userPassword);
    if (signInResponse.status === 1) {
      toast.success("Signed In Successfully");
      const userWallet = JSON.parse(signInResponse.data.user.wallets);
      myDispatch(setUserAuthToken(signInResponse.data.access_token));
      myDispatch(
        setUserWallets({
          demoAccount: userWallet.demo_wallet,
          realAccount: userWallet.real_wallet,
          tourneyAccount: userWallet.tournament_wallet,
        })
      );
      myDispatch(setUserLoggedIn(true));
      myDispatch(
        setUserDetails({
          name: signInResponse.data.user.name,
          email: signInResponse.data.user.email,
        })
      );
      myNavigate("/dashboard");
      setLoading(false);
    } else {
      toast.error("Invalid Credentials");
      setLoading(false);
    }
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
          <form onSubmit={userSignIn}>
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
            <button type="submit" disabled={loading} className={"loadingBtn"}>
              {loading ? <FiLoader /> : `Sign In`}
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

export default SignIn;
