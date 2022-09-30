import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ServicesHome } from "./components/services/ServicesHome";
import Home from "./pages/home";
import Activate from "./pages/home/Activate";
import UserHome from "./pages/home/UserHome";
import Login from "./pages/login";
import Profile from "./pages/profile";
import LoggedinRoutes from "./routes/LoggedinRoutes";
import NotLoggedinRoutes from "./routes/NotLoggedinRoutes";
import ArrowButton from "./components/subComponents/scroll-top/ScrollToTop";
import ResetPassword from "./pages/reset";
import { Services } from "./components";
import EngineRepair from "./components/services/service/engine-repair/EngineRepair";
import TransmissionRepair from "./components/services/service/transmission-repair/TransmissionRepair";
import AutoBodyRestoration from "./components/services/service/auto-body-restoration/AutoBodyRestoration";
import CollisionRepair from "./components/services/service/collision-repair/CollisionRepair";
import GlassRepair from "./components/services/service/glass-repair/GlassRepair";
import DentRepair from "./components/services/service/dent-repair/DentRepair";
import FrameStraightening from "./components/services/service/frame-straightening/FrameStraightening";
import HailDamageRepair from "./components/services/service/hail-damage-repair/HailDamageRepair";
import RustRepair from "./components/services/service/rust-repair/RustRepair";
import CarRepairServices from "./components/services/service/car-repair-services/CarRepairServices";
import ExteriorBodyServices from "./components/services/service/exterior-body-services/ExteriorBodyServices";
import MufflerExhaustServices from "./components/services/service/muffler-exhaust-services/MufflerExhaustServices";

const App = () => {
  return (
    <div className="App">
      <ArrowButton />
      <Routes>
        <Route path="/services//*" element={<ServicesHome />} />

        {/* SERVICES LIST */}
        <Route path="/services/engine-repair" element={<EngineRepair />} />
        <Route
          path="/services/transmission-repair"
          element={<TransmissionRepair />}
        />
        <Route
          path="/services/auto-body-restoration"
          element={<AutoBodyRestoration />}
        />
        <Route
          path="/services/collision-repair"
          element={<CollisionRepair />}
        />
        <Route path="/services/glass-repair" element={<GlassRepair />} />
        <Route path="/services/dent-repair" element={<DentRepair />} />
        <Route
          path="/services/frame-straightening"
          element={<FrameStraightening />}
        />
        <Route
          path="/services/hail-damage-repair"
          element={<HailDamageRepair />}
        />
        <Route path="/services/rust-repair" element={<RustRepair />} />
        <Route
          path="/services/car-repair-services"
          element={<CarRepairServices />}
        />
        <Route
          path="/services/exterior-body-services"
          element={<ExteriorBodyServices />}
        />
        <Route
          path="/services/muffler-exhaust-services"
          element={<MufflerExhaustServices />}
        />
        {/* SERVICES LIST */}

        <Route element={<LoggedinRoutes />}>
          <Route path="/activate/:token" element={<Activate />} />
          <Route path="/*" element={<UserHome />} />
          <Route path="/profile/:username/*" element={<Profile />} />
          <Route path="/services//*" element={<Services />} />
        </Route>
        <Route element={<NotLoggedinRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
