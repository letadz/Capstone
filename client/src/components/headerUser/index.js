// import React from "react";
import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import "./style.css";
import Logo from "../../images/logo/MagsLogo.png";
import Cookies from "js-cookie";
import { profileReducer } from "../../functions/reducers";
import axios from "axios";

const Menu = () => (
  <>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <a href="#services">services</a>
    </p>
    <p>
      <a href="#about">about us</a>
    </p>

    <p>
      <a href="#contacts">contacts</a>
    </p>
  </>
);

const LoggedInHeader = () => {
  const dispatchs = useDispatch();
  const navigates = useNavigate();
  const logout = () => {
    Cookies.set("user", "");
    dispatchs({
      type: "LOGOUT",
    });
    navigates("/");
  };
  const { user } = useSelector((user) => ({ ...user }));
  const [toggleMenu, setToggleMenu] = useState(false);
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
    <div id="home" className="navbar">
      <div className="navbar-links container">
        <div className="navbar-links_logo">
          <a href="#home">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>

        <div className="navbar-book-logout">
          <div className="navbar-book">
            <Link to={`/profile/${userName}/home`}>
              <img src={profile?.picture} alt="" />
              <span>{profile?.first_name}</span>
            </Link>
          </div>
          <button
            onClick={() => {
              logout();
            }}
            className="navbar-logout"
          >
            Logout
          </button>

          <div className="navbar-menu">
            {toggleMenu ? (
              <HiOutlineX
                color="#020202"
                size={32}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <HiMenuAlt3
                color="#020202"
                size={32}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="navbar-menu_container swing-in-top-fwd">
                <div className="navbar-menu_container-links ">
                  <Menu />
                  <div className="navbar-menu_container-links-book">
                    <Link to={`/profile/${userName}/home`}>
                      <img src={profile?.picture} alt="" />
                      <span>{profile?.first_name}</span>
                    </Link>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                    }}
                    className="navbar-logout-menu"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedInHeader;
