import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { uploadImages } from "../../../functions/uploadImages";
import { updateprofilePicture } from "../../../functions/user";
import Detail from "../editProfile/Detail";
import SendVerification from "../sendVerfication";
import FileBase64 from "react-file-base64";
import PulseLoader from "react-spinners/PulseLoader";

const ProfileHome = ({ profile }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [details, setDetails] = useState();
  useEffect(() => {
    setDetails(profile);
    setInfos(profile);
  }, [profile]);

  const initial = {
    picture: details?.picture ? details.picture : "",
    first_name: details?.first_name ? details.first_name : "",
    last_name: details?.last_name ? details.last_name : "",
    gender: details?.gender ? details.gender : "",
    birth_year: details?.birth_year ? details.birth_year : "",
    birth_month: details?.birth_month ? details.birth_month : "",
    birth_day: details?.birth_day ? details.birth_day : "",
    address: details?.address ? details.address : "",
    phone_number: details?.phone_number ? details.phone_number : "",
  };
  const [infos, setInfos] = useState(initial);
  const updateDetails = async (e) => {
    try {
      setLoading(true);
      // const formData = new FormData();
      // for (let field in infos) {
      //   formData.append(field, infos[field]);
      // }
      // console.log(infos);
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/updateDetails`,
        {
          infos,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setDetails(data);
      setLoading(false);
      setShow(false);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "image") {
      value = e.target.files[0];
    }
    setInfos({
      ...infos,
      [e.target.name]: value,
    });
  };

  return (
    <div className="profile_container-user">
      <div className="profile_verification">
        {user.verified === false && <SendVerification user={user} />}
      </div>
      <div className="profile_infos">
        <div className="profile_image details_1">
          <div className="profile_img">
            <img src={profile.picture} alt="" />
          </div>
          <div className="profile_circle hover1" onClick={() => setShow(true)}>
            {!show && (
              <button className="orange_btn upload_btn">
                <i className="camera_filled_icon camera"></i>Update Image
              </button>
            )}
          </div>
          {show && (
            <>
              <div className="file_container">
                <FileBase64
                  value={details?.picture}
                  multiple={false}
                  onDone={({ base64 }) =>
                    setInfos({ ...infos, picture: base64 })
                  }
                />
              </div>

              <div className="upload_btns">
                <button
                  disabled={loading}
                  className="orange_btn"
                  onClick={updateDetails}
                >
                  {loading ? <PulseLoader color="#fff" size={5} /> : "Save"}
                </button>
                <button className="gray_btn" onClick={() => setShow(false)}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>

        <div className="details_2">
          <div className="details_header">Name</div>
          <Detail
            value={details?.first_name}
            placeholder="First Name"
            name="first_name"
            text="First Name"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <Detail
            value={details?.last_name}
            placeholder="Last Name"
            name="last_name"
            text="Last Name"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <div className="details_header">Gender</div>
          <Detail
            value={details?.gender}
            placeholder="Male or Female"
            name="gender"
            text="Gender"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
            rel
          />
        </div>
        <div className="details_3">
          <div className="details_header">Birth Date</div>
          <div className="birthday-container">
            <Detail
              value={details?.birth_month}
              placeholder="Birth Month"
              name="birth_month"
              text="Birth Month"
              handleChange={handleChange}
              updateDetails={updateDetails}
              infos={infos}
            />
            <Detail
              value={details?.birth_day}
              placeholder="Birth Day"
              name="birth_day"
              text="Birth Day"
              handleChange={handleChange}
              updateDetails={updateDetails}
              infos={infos}
            />
            <Detail
              value={details?.birth_year}
              placeholder="Birth Year"
              name="birth_year"
              text="Birth Year"
              handleChange={handleChange}
              updateDetails={updateDetails}
              infos={infos}
            />
          </div>
        </div>
        <div className="details_4">
          <div className="details_header">Address</div>
          <Detail
            value={details?.address}
            placeholder="Add address"
            name="address"
            text="Address"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
          <div className="details_header">Phone Number</div>
          <Detail
            value={details?.phone_number}
            placeholder="Add phone number"
            name="phone_number"
            text="Phone Number"
            handleChange={handleChange}
            updateDetails={updateDetails}
            infos={infos}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
