import api from "./api";

export interface Vehicle {
  id: number;
  vehicleNumber: string;
  vehicleType: string;
  pucCertificate?: string;
  insuranceCertificate?: string;
}

export const fetchVehicles = () => {
  return api.get<Vehicle[]>("/vehicles");
};

export const createVehicle = (newVehicle: Vehicle) => {
  return api.post<Vehicle>("/vehicles", newVehicle);
};
