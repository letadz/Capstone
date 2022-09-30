import React, { useState } from "react";
import moment from "moment";
import Moment from "react-moment";
import DeleteConfirmation from "./DeleteConfirmation";
import { deleteHistory } from "../../functions/deleteHistory";
import { useNavigate } from "react-router-dom";

const Hist = ({ userName, hist, setDelHistory, historyId, token, postRef }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const deleteConfirmation = () => {
    setDelHistory(hist._id);
    setShow(true);
  };
  const deleteHist = async () => {
    const res = await deleteHistory(historyId, token);
    if (res.status === "ok") {
      setShow(false);
      postRef.current.remove();
    }
  };
  return (
    <tr ref={postRef} key={hist._id}>
      <td>
        <Moment fromNow interval={30}>
          {hist.createdAt}
        </Moment>
      </td>
      <td>{hist.car.car_brand}</td>
      <td>{hist.car.car_model}</td>
      <td>{hist.service}</td>
      <td>{moment(new Date(hist.date_book)).format("MM/DD/YYYY")}</td>
      <td>
        <button onClick={() => deleteConfirmation()} className="orange_btn">
          Delete
        </button>
        {show && (
          <DeleteConfirmation setShow={setShow} deleteHist={deleteHist} />
        )}
      </td>
    </tr>
  );
};

export default Hist;
