import React, { useState } from "react";
// import { ReactDOM } from "react";
import axios from "axios";
import swal from "sweetalert";

const Register = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    birth_day: "",
    birth_month: "",
    birth_year: "",
    email: "",
    password: "",
    confirm_password: "",
    gender: "",
    error_list: {},
  });

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: user.first_name,
      last_name: user.last_name,
      birth_day: user.birth_day,
      birth_month: user.birth_month,
      birth_year: user.birth_year,
      email: user.email,
      password: user.password,
      confirm_password: user.confirm_password,
      gender: user.gender,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/register`, data)
      .then((res) => {
        swal("Success", "Registered successfully", "success");
        setUser({
          first_name: "",
          last_name: "",
          birth_day: "",
          birth_month: "",
          birth_year: "",
          email: "",
          password: "",
          confirm_password: "",
          gender: "",
          error_list: {},
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        setUser({ ...user, error_list: err.response.data });
      });
  };

  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center ">
        <div className="col-md-6 ">
          <div className="card bg-secondary text-white">
            <div className="card-header p-3 mb-2 bg-dark text-white text-center">
              <h4>Register User</h4>
            </div>
            <div className="card-body ">
              <form onSubmit={onFormSubmit}>
                <div className="input-group mb-3">
                  <label htmlFor="first_name" className="input-group-text">
                    First Name
                  </label>
                  <input
                    className={`form-control ${
                      user.error_list.first_name ? "is-invalid" : ""
                    }`}
                    name="first_name"
                    id="first_name"
                    type="text"
                    onChange={onInputChange}
                    value={user.first_name}
                  />
                  <div className="invalid-feedback">
                    {user.error_list.first_name}
                  </div>
                </div>
                <div className="input-group mb-3">
                  <label htmlFor="last_name" className="input-group-text">
                    Last Name
                  </label>
                  <input
                    className={`form-control ${
                      user.error_list.last_name ? "is-invalid" : ""
                    }`}
                    name="last_name"
                    id="last_name"
                    type="text"
                    onChange={onInputChange}
                    value={user.last_name}
                  />
                  <div className="invalid-feedback">
                    {user.error_list.last_name}
                  </div>
                </div>

                <div className="justify-content-md-centergrid">
                  <h4>Birthdate</h4>
                  <div className="d-flex justify-content-between ">
                    <div className="input-group mb-3  ">
                      <label htmlFor="birth_day" className="input-group-text ">
                        Day
                      </label>
                      <input
                        className={`form-control ${
                          user.error_list.birth_day ? "is-invalid" : ""
                        }`}
                        placeholder="Day"
                        name="birth_day"
                        id="birth_day"
                        type="number"
                        onChange={onInputChange}
                        value={user.birth_day}
                      />
                      <div className="invalid-feedback">
                        {user.error_list.birth_day}
                      </div>
                    </div>
                    <div className="input-group text mb-3  ">
                      <label htmlFor="birth_month" className="input-group-text">
                        Month
                      </label>
                      <input
                        className={`form-control ${
                          user.error_list.birth_month ? "is-invalid" : ""
                        }`}
                        placeholder="Month"
                        name="birth_month"
                        id="birth_month"
                        type="number"
                        onChange={onInputChange}
                        value={user.birth_month}
                      />
                      <div className="invalid-feedback">
                        {user.error_list.birth_month}
                      </div>
                    </div>
                    <div className="input-group text mb-3 ">
                      <label htmlFor="year" className="input-group-text">
                        year
                      </label>
                      <input
                        className={`form-control ${
                          user.error_list.birth_year ? "is-invalid" : ""
                        }`}
                        placeholder="Year"
                        name="birth_year"
                        id="birth_year"
                        type="number"
                        onChange={onInputChange}
                        value={user.birth_year}
                      />
                      <div className="invalid-feedback">
                        {user.error_list.birth_year}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <label htmlFor="email" className="input-group-text">
                    Email
                  </label>
                  <input
                    className={`form-control ${
                      user.error_list.email ? "is-invalid" : ""
                    }`}
                    name="email"
                    id="email"
                    type="email"
                    onChange={onInputChange}
                    value={user.email}
                  />
                  <div className="invalid-feedback">
                    {user.error_list.email}
                  </div>
                </div>
                <div className="input-group mb-3">
                  <label htmlFor="password" className="input-group-text">
                    Enter Password
                  </label>
                  <input
                    className={`form-control ${
                      user.error_list.password ? "is-invalid" : ""
                    }`}
                    name="password"
                    id="password"
                    type="text"
                    onChange={onInputChange}
                    value={user.password}
                  />
                  <div className="invalid-feedback">
                    {user.error_list.password}
                  </div>
                </div>
                <div className="input-group mb-3">
                  <label htmlFor="password" className="input-group-text">
                    Confirm Password
                  </label>
                  <input
                    className={`form-control ${
                      user.error_list.password ? "is-invalid" : ""
                    }`}
                    name="password"
                    id="password"
                    type="text"
                    onChange={onInputChange}
                    value={user.password}
                  />
                  <div className="invalid-feedback">
                    {user.error_list.password}
                  </div>
                </div>
                <div className="input-group mb-3">
                  <div className="col-md-4 md-auto">
                    <h4>Gender:</h4>
                  </div>
                  <div>
                    <div class="form-check form-check-inline">
                      <label class="form-check-label" for="inlineCheckbox1">
                        Male
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                        onChange={onInputChange}
                        // value={user.gender}
                      />
                      <div className="invalid-feedback">
                        {user.error_list.gender}
                      </div>
                    </div>
                    <div class="form-check form-check-inline">
                      <label class="form-check-label" for="inlineCheckbox2">
                        Female
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                        onChange={onInputChange}
                        //  value={user.gender}
                      />
                      <div className="invalid-feedback">
                        {user.error_list.gender}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary w-100 bg-warning text-dark "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
