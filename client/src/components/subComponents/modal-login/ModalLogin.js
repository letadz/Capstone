import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../../helpers/clickOutside";
import Logo from "../../../images/logo/MagsLogoWhite.png";
import "./ModalLogin.css";

const ModalLogin = (_, setVisible) => {
  const popup = useRef(null);

  useClickOutside(popup, () => {
    setVisible(!false);
  });

  return (
    <div className="modal-login" ref={popup}>
      <div
        className="modal fade text-center"
        id="need-login"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <img className="modal-logo" src={Logo} alt="logo"></img>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <h3>You need to login first.</h3>
              <Link
                className="modal-link-login"
                to="/login"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Go to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
