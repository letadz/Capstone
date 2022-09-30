import React from "react";
import { useParams, useRoutes } from "react-router-dom";
import EngineRepair from "./service/engine-repair/EngineRepair";
import AutoBodyRestoration from "./service/auto-body-restoration/AutoBodyRestoration";
import CollisionRepair from "./service/collision-repair/CollisionRepair";
import GlassRepair from "./service/glass-repair/GlassRepair";
import DentRepair from "./service/dent-repair/DentRepair";
import FrameStraightening from "./service/frame-straightening/FrameStraightening";
import HailDamageRepair from "./service/hail-damage-repair/HailDamageRepair";
import RustRepair from "./service/rust-repair/RustRepair";
import TransmissionRepair from "./service/transmission-repair/TransmissionRepair";
import CarRepairServices from "./service/car-repair-services/CarRepairServices";
import ExteriorBodyServices from "./service/exterior-body-services/ExteriorBodyServices";
import MufflerExhaustServices from "./service/muffler-exhaust-services/MufflerExhaustServices";
import ServiceNavbar from "./ServiceNavbar";
import { useSelector } from "react-redux";

export const ServicesHome = () => {
  const { username } = useParams();
  const { user } = useSelector((user) => ({ ...user }));
  const userName = username === undefined ? user.username : username;
  const routes = useRoutes([
    {
      path: "/engine-repair",
      element: <EngineRepair user={user} userName={userName} />,
    },
    {
      path: "/transmission-repair",
      element: <TransmissionRepair user={user} userName={userName} />,
    },
    {
      path: "/auto-body-restoration",
      element: <AutoBodyRestoration user={user} userName={userName} />,
    },
    {
      path: "/collision-repair",
      element: <CollisionRepair user={user} userName={userName} />,
    },
    {
      path: "/glass-repair",
      element: <GlassRepair user={user} userName={userName} />,
    },
    {
      path: "/dent-repair",
      element: <DentRepair user={user} userName={userName} />,
    },
    {
      path: "/frame-straightening",
      element: <FrameStraightening user={user} />,
    },
    {
      path: "/hail-damage-repair",
      element: <HailDamageRepair user={user} userName={userName} />,
    },
    {
      path: "/rust-repair",
      element: <RustRepair user={user} userName={userName} />,
    },
    {
      path: "/car-repair-services",
      element: <CarRepairServices user={user} userName={userName} />,
    },
    {
      path: "/exterior-body-services",
      element: <ExteriorBodyServices user={user} userName={userName} />,
    },
    {
      path: "/muffler-exhaust-services",
      element: <MufflerExhaustServices user={user} userName={userName} />,
    },
  ]);
  return (
    <div>
      {routes}
      <ServiceNavbar />
    </div>
  );
};
