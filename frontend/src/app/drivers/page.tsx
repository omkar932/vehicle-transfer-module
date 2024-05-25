"use client";
import React from "react";
import DriverList from "../../components/DriverList";
import DriverForm from "../../components/DriverForm";

const DriversPage: React.FC = () => {
  return (
    <div>
      <h1>Driver Management</h1>
      <DriverForm />
      <DriverList />
    </div>
  );
};

export default DriversPage;
