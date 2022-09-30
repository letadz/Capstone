import React, { useState } from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { useTable } from "react-table";
import History from "./History";

const BookHistory = ({ history }) => {
  return (
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
        {/* iterate through the customers array and render a unique Customer component for each customer object in the array */}
        {history.map((book) => (
          <History key={book._id} book={book} />
        ))}
      </tbody>
    </table>
  );
};

export default BookHistory;
