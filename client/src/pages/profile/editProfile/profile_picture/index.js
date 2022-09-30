import { useRef, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import FileBase64 from "react-file-base64";

export default function ProfilePicture({
  setShow,

  updateDetails,
  infos,
  setInfos,
}) {
  const popup = useRef(null);
  return (
    <div className="blur">
      <div className="postBox pictureBox" ref={popup}>
        <div className="box_header">
          <div className="small_circle" onClick={() => setShow(false)}>
            <i className="exit_icon"></i>
          </div>
          <span>Update profile picture</span>
        </div>
      </div>
    </div>
  );
}
