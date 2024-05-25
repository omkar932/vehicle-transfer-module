"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addVehicle } from "../redux/slices/vehicleSlice";
import { Vehicle } from "../utils/vehicleService";

const VehicleForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [vehicle, setVehicle] = useState<Partial<Vehicle>>({
    vehicleNumber: "",
    vehicleType: "",
    pucCertificate: "",
    insuranceCertificate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (vehicle.vehicleNumber && vehicle.vehicleType) {
      dispatch(addVehicle(vehicle as Vehicle));
      setVehicle({
        vehicleNumber: "",
        vehicleType: "",
        pucCertificate: "",
        insuranceCertificate: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Vehicle Number</label>
        <input
          type="text"
          name="vehicleNumber"
          value={vehicle.vehicleNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Vehicle Type</label>
        <input
          type="text"
          name="vehicleType"
          value={vehicle.vehicleType}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>PUC Certificate</label>
        <input
          type="text"
          name="pucCertificate"
          value={vehicle.pucCertificate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Insurance Certificate</label>
        <input
          type="text"
          name="insuranceCertificate"
          value={vehicle.insuranceCertificate}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Vehicle</button>
    </form>
  );
};

export default VehicleForm;
