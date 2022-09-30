import axios from "axios";
import React, { useRef, useState } from "react";
import useClickOutside from "../../helpers/clickOutside";

import "./style.css";

const DeleteConfirm = ({ deleteHist, setShow, error }) => {
  const popup = useRef(null);
  useClickOutside(popup, () => {
    setShow(false);
  });

  return (
    <div className="blur">
      <div className="confirmation_container" ref={popup}>
        <div className="container_header">
          <div
            className="small_circle"
            onClick={() => {
              setShow(false);
            }}
          >
            <i className="exit_icon"></i>
          </div>
          <span>Are you sure?</span>
        </div>
        <div className="confirmation_btns-container">
          <div className="confirmation_btns">
            <button
              onClick={() => {
                setShow(false);
              }}
              className="gray_btn"
            >
              Cancel
            </button>
            <button onClick={() => deleteHist()} className="orange_btn">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
