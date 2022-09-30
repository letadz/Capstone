import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CodeVerification = ({
  code,
  setCode,
  error,
  loading,
  setLoading,
  setVisible,
  setError,
  userInfos,
}) => {
  const { email } = userInfos;
  const verifyCode = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/validateResetCode`,
        { email, code }
      );
      setVisible(3);
      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="reset_form">
      <div className="reset_form-header">Code Verification</div>
      <div className="reset_form-text">
        Please enter code that been sent to your email.
      </div>
      <form
        onSubmit={() => {
          verifyCode();
        }}
      >
        <input
          type="text"
          name="code"
          id="code"
          placeholder="Code"
          onChange={(e) => setCode(e.target.value)}
          value={code}
        />
        {error && <div className="error_text">{error}</div>}
        <Link to="/login" className="">
          Cancel
        </Link>
        <button type="submit" className="gray_btn">
          Continue
        </button>
      </form>
      <div className="reset_form-btn"></div>
    </div>
  );
};

export default CodeVerification;
