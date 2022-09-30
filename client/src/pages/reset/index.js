import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Logo from "../../images/logo/MagsLogo.png";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import SearchAccount from "./SearchAccount";
import SendEmail from "./SendEmail";
import CodeVerification from "./CodeVerification";
import { Footer } from "../../components";
import ChangePassword from "./ChangePassword";
import Copyright from "../../components/copyright/Copyright";

const ResetPassword = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(0);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [error, setError] = useState("");
  const [userInfos, setUserInfos] = useState("");
  const logout = () => {
    Cookies.set("user", "");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  console.log(userInfos);
  return (
    <div>
      <div className="reset">
        <div className="reset_header">
          <img src={Logo} alt="logo" />
          {user ? (
            <div className="right_reset">
              <Link to="/profile">
                <img src={user.picture} alt="" />
              </Link>

              <button
                onClick={() => {
                  logout();
                }}
                className="orange_btn"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="right_reset">
              <button className="orange_btn">Login</button>
            </Link>
          )}
        </div>
        <div className="reset_wrap">
          {visible === 0 && (
            <SearchAccount
              email={email}
              setEmail={setEmail}
              error={error}
              setError={setError}
              setLoading={setLoading}
              setUserInfos={setUserInfos}
              setVisible={setVisible}
            />
          )}
          {visible === 1 && userInfos && (
            <SendEmail
              email={email}
              userInfos={userInfos}
              error={error}
              setError={setError}
              setLoading={setLoading}
              setUserInfos={setUserInfos}
              setVisible={setVisible}
            />
          )}
          {visible === 2 && (
            <CodeVerification
              user={user}
              code={code}
              setCode={setCode}
              error={error}
              setError={setError}
              setLoading={setLoading}
              setVisible={setVisible}
              userInfos={userInfos}
            />
          )}
          {visible === 3 && (
            <ChangePassword
              password={password}
              confirm_password={confirm_password}
              setConfirm_password={setConfirm_password}
              setPassword={setPassword}
              error={error}
              setError={setError}
              setLoading={setLoading}
              setVisible={setVisible}
              userInfos={userInfos}
            />
          )}
        </div>
      </div>

      <div className="copyright-container">
        <div className="copyright-content">
          <span>&copy; Mag's Auto Repair Philippines. All Right Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
