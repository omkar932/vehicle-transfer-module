import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { loadDrivers } from "../redux/slices/driverSlice";

const DriverList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { drivers, loading, error } = useSelector(
    (state: RootState) => state.drivers
  );

  useEffect(() => {
    dispatch(loadDrivers());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Drivers</h1>
      <ul>
        {drivers.map((driver) => (
          <li
            key={driver.id}
            className="border-b border-gray-200 py-2 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{driver.name}</h2>
              <p className="text-gray-600">{driver.phoneNumber}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverList;
