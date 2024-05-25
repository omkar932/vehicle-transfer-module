import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addDriver } from "../redux/slices/driverSlice";
import { Driver } from "../utils/driverService";

const DriverForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [driver, setDriver] = useState<Partial<Driver>>({
    name: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDriver({ ...driver, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (driver.name && driver.phoneNumber) {
      dispatch(addDriver(driver as Driver));
      setDriver({ name: "", phoneNumber: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={driver.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={driver.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Driver</button>
    </form>
  );
};

export default DriverForm;
