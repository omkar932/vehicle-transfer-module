import api from "./api";

export interface Driver {
  id: number;
  name: string;
  phoneNumber: string;
  profilePhoto?: string;
}

export const fetchDrivers = () => {
  return api.get("/users");
};

export const createDriver = (newDriver: Driver) => {
  return api.post<Driver>("/users", newDriver);
};
