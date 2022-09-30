import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";

import { Link, useNavigate, useParams } from "react-router-dom";
import LoggedInHeader from "../../../components/headerUser";
import { profileReducer } from "../../../functions/reducers";

import { AiOutlineCar, AiOutlineHistory } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import "../style.css";

const Navbar = () => {
  const { user } = useSelector((user) => ({ ...user }));
  const { username } = useParams();
  const navigate = useNavigate();

  const userName = username === undefined ? user.username : username;
  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    loading: false,
    profile: {},
    error: "",
  });
  useEffect(() => {
    getProfile();
  }, [userName]);
  const getProfile = async () => {
    try {
      dispatch({
        type: "PROFILE_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getProfile/${userName}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (data.ok === false) {
        navigate("/");
      } else {
        dispatch({
          type: "PROFILE_SUCCESS",
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: "PROFILE_ERROR",
        payload: error.response.data.message,
      });
    }
  };

  return (
    <>
      <div className="user_container">
        <div className="navigation">
          <Link to="/" className="user-link_back">
            <BsArrowLeft className="arrow-left" />
            Back to Home
          </Link>

          <Link className="navigation_name" to={`/profile/${userName}/home`}>
            <div className="profile_pic">
              <img src={profile.picture} alt="" />
            </div>

            <div className="profile_text">
              <span>
                {profile.first_name} {profile.last_name}
              </span>
              <span>{profile.email}</span>
            </div>
          </Link>

          <div className="menu">
            <Link to={`/profile/${userName}/cars`} className="menu_item">
              <AiOutlineCar className="menu_icon" />
              Cars
            </Link>

            <Link to={`/profile/${userName}/history`} className="menu_item">
              <AiOutlineHistory className="menu_icon" /> Service History
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
