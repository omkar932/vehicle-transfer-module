"use client";
import React from "react";
import VehicleList from "../../components/VehicleList";
import VehicleForm from "../../components/VehicleForm";

const VehiclesPage: React.FC = () => {
  return (
    <div>
      <h1>Vehicle Management</h1>
      <VehicleForm />
      <VehicleList />
    </div>
  );
};

export default VehiclesPage;
