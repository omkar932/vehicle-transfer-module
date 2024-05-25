"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { loadVehicles } from "../redux/slices/vehicleSlice";

const VehicleList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { vehicles, loading, error } = useSelector(
    (state: RootState) => state.vehicles
  );

  useEffect(() => {
    dispatch(loadVehicles());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Vehicle List</h2>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id} className="mb-2">
            {vehicle.vehicleNumber} - {vehicle.vehicleType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
