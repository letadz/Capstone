import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const ChangePassword = ({
  password,
  setPassword,
  confirm_password,
  setConfirm_password,
  error,
  laoding,
  setLoading,
  userInfos,
  setError,
}) => {
  const navigate = useNavigate();
  const { email } = userInfos;
  const changePassword = async () => {
    try {
      setLoading(true);
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/changePassword`, {
        email,
        password,
      });
      setError("");
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="reset_form">
      <div className="reset_form-header">Change Password</div>
      <div className="reset_form-text">Pick a strong password.</div>
      <form
        onSubmit={() => {
          changePassword();
        }}
      >
        <input
          type="text"
          name="password"
          id="password"
          placeholder="New password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="text"
          name="confirm_passsword"
          id="confirm_passsword"
          placeholder="Confirm new password"
          onChange={(e) => setConfirm_password(e.target.value)}
          value={confirm_password}
        />
        {error && <div className="error_text">{error}</div>}
      </form>
      <div className="reset_form-btn">
        <Link to="/login" className="">
          Cancel
        </Link>
        <button type="submit" className="gray_btn">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
