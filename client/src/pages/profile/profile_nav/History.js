import axios from "axios";
import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Hist from "../../../components/book_history/Hist";
import { deleteHistory } from "../../../functions/deleteHistory";

// function reducer(state, action) {
//   switch (action.type) {
//     case "HISTORY_REQUEST":
//       return { ...state, loading: true, error: "" };
//     case "HISTORY_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         histories: action.payload,
//         error: "",
//       };
//     case "HISTORY_ERROR":
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }

const History = ({ userName, profile }) => {
  const [delHistory, setDelHistory] = useState();
  const [userHistory, setUserHistory] = useState();
  const [visible, setVisible] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const postRef = useRef(null);

  // const [{ loading, error, histories }, dispatch] = useReducer(reducer, {
  //   loading: false,
  //   histories: [],
  //   error: "",
  // });
  // useEffect(() => {
  //   getAllHistories();
  // }, []);
  // const getAllHistories = async () => {
  //   try {
  //     dispatch({
  //       type: "HISTORY_REQUEST",
  //     });
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_BACKEND_URL}/getAllBooking`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${user.token}`,
  //         },
  //       }
  //     );
  //     dispatch({
  //       type: "HISTORY_SUCCESS",
  //       payload: data,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: "HISTORY_ERROR",
  //       payload: error.response.data.message,
  //     });
  //   }
  // };

  const columns = useMemo(
    () => [
      {
        columns: [
          {
            Header: "Brand",
            accessor: "profile.car.car_brand",
          },
          {
            Header: "Model",
            accessor: "profile.car.car_model",
          },
        ],
      },
      {
        columns: [
          {
            Header: "Service",
            accessor: "profile.history.service",
          },
          {
            Header: "Schedule",
            accessor: "profile.history.date_book",
          },
        ],
      },
    ],
    []
  );
  // console.log(histories._id);
  return (
    <div className="history_container">
      <div className="history_header">
        <h3>Services History</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Created</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Service</th>
            <th>Schedule</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {profile.history &&
            profile.history.length &&
            profile.history.map((hist) => (
              <Hist
                user={user}
                key={hist._id}
                columns={columns}
                hist={hist}
                historyId={hist._id}
                setDelHistory={setDelHistory}
                token={user.token}
                postRef={postRef}
                userName={userName}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
