import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const SendEmail = ({
  email,
  userInfos,
  error,
  setError,
  setVisible,
  setUserInfos,
  loding,
  setLoading,
}) => {
  const sendEmail = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/sendResetPasswordCode`,
        {
          email,
        }
      );
      setError("");
      setVisible(2);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="reset_form dynamic_height">
      <div className="reset_form-header">Reset Your Password</div>
      <div className="reset_grid">
        <div className="reset_left">
          <div className="reset_form-text">
            How do you want to recieve the code to reset your password?
          </div>
          <label htmlFor="email">
            <input type="radio" name="email" checked readOnly />
            <div className="label_col">
              <span>Send code via email</span>
              <span>{userInfos.email}</span>
            </div>
          </label>
        </div>
        <div className="reset_right">
          <img src={userInfos.picture} alt="" />
          <span>{userInfos.email}</span>
        </div>
      </div>
      {error && <div className="error_text">{error}</div>}
      <div className="reset_form-btn">
        <Link to="/login" className="">
          Not You?
        </Link>
        <button
          onClick={() => {
            sendEmail();
          }}
          className="orange_btn"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SendEmail;
