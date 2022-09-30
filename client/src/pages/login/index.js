import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./style.css";
import LoginForm from "../../components/login/LoginForm";
import RegisterForm from "../../components/login/RegisterForm";
const Login = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="login">
        <div className="login_wrapper">
          
          <LoginForm setVisible={setVisible} />
          {visible && <RegisterForm setVisible={setVisible} />}
        </div>
      </div>
    </>
  );
};

export default Login;
