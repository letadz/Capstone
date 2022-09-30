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

const UserHome = () => {
  const { username } = useParams();
  const { user } = useSelector((user) => ({ ...user }));
  const userName = username === undefined ? user.username : username;
  return (
    <div>
      <LoggedInHeader />
      <Hero user={user} useName={userName} />
      <Offers />
      <Services userName={userName} user={user} />
      <Company />
      <Faqs />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default UserHome;
