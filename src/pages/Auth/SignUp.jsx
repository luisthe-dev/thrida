import { Link, useNavigate } from "react-router-dom";
import { RiUser3Line } from "react-icons/ri";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import {
  AiOutlineArrowLeft,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useState } from "react";
import { SignInUser, SignUpUser } from "../../components/apis/userApi";
import { toast } from "react-toastify";
import { FiLoader } from "react-icons/fi";
import {
  setUserAuthToken,
  setUserDetails,
  setUserLoggedIn,
  setUserWallets,
} from "../../redux/userStore";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const myNavigate = useNavigate();
  const myDispatch = useDispatch();

  const userSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const signUpResponse = await SignUpUser(userName, userMail, userPassword);
    if (signUpResponse.status === 1) {
      toast.success("Signed Up Successfully");
      // await userSignIn();
      setLoading(false);
    } else {
      toast.error(signUpResponse.message);
      setLoading(false);
    }
  };

  // const userSignIn = async () => {
  //   setLoading(true);
  //   const signInResponse = await SignInUser(userMail, userPassword);
  //   if (signInResponse.status === 1) {
  //     toast.success("Signed In Successfully");
  //     const userWallet = JSON.parse(signInResponse.data.user.wallets);
  //     myDispatch(setUserAuthToken(signInResponse.data.access_token));
  //     myDispatch(
  //       setUserWallets({
  //         demoAccount: userWallet.demo_wallet,
  //         realAccount: userWallet.real_wallet,
  //         tourneyAccount: userWallet.tournament_wallet,
  //       })
  //     );
  //     myDispatch(setUserLoggedIn(true));
  //     myDispatch(
  //       setUserDetails({
  //         name: signInResponse.data.user.name,
  //         email: signInResponse.data.user.email,
  //         level: signInResponse.data.user.level,
  //         is_pro: Number(signInResponse.data.is_pro),
  //       })
  //     );
  //     myNavigate("/dashboard");
  //     setLoading(false);
  //   } else {
  //     toast.error(signInResponse.message);
  //     setLoading(false);
  //   }
  // };

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
            <div className="authFormBoldText">
              <p>
                {" "}
                By Signing up, you agree to the{" "}
                <Link to={"/agreement"}>Terms and Conditions</Link> and{" "}
                <Link to={"/privacy"}>Privacy Policy</Link>.{" "}
              </p>
            </div>
            <button type="submit" disabled={loading} className={"loadingBtn"}>
              {loading ? <FiLoader /> : `Sign Up`}
              {loading && ` Hold On`}
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
