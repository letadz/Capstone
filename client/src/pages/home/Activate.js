import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  Header,
  Hero,
  Offers,
  Services,
  Company,
  Testimonials,
  Faqs,
  About,
  Contact,
  Footer,
} from "../../components/";
import LoggedInHeader from "../../components/headerUser";
import ActivateForm from "./ActivateForm";
import axios from "axios";
import Cookies from "js-cookie";

const Activate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((user) => ({ ...user }));
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { token } = useParams();
  useEffect(() => {
    activateAccount();
  }, []);
  const activateAccount = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/activate`,
        { token },
        {
          header: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
      Cookies.set("user", JSON.stringify({ ...user, verified: true }));
      dispatch({
        type: "VERIFY",
        payload: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setError(error.response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };
  return (
    <div>
      {success && (
        <ActivateForm
          type="success"
          header="Account verification success"
          text={success}
          loading={loading}
        />
      )}
      {error && (
        <ActivateForm
          type="error"
          header="Account verification failed"
          text={error}
          loading={loading}
        />
      )}
      <LoggedInHeader />
      <Hero />
      <Offers />
      <Services />
      <Company />
      <Faqs />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Activate;
