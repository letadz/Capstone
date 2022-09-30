import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchAccount = ({
  email,
  setEmail,
  error,
  setError,
  setLoading,
  setUserInfos,
  setVisible,
}) => {
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/findUser`,
        { email }
      );
      setUserInfos(data);
      setVisible(1);
      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="reset_form">
      <div className="reset_form-header">Find Your Account</div>
      <div className="reset_form-text">
        Please enter your email address to search for your account
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {error && <div className="error_text">{error}</div>}
        <div className="reset_form-btn">
          <Link to="/login" className="">
            Cancel
          </Link>
          <button type="submit" className="orange_btn">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchAccount;
