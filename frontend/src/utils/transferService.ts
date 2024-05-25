import api from "./api";

export interface Transfer {
  id: number;
  vehicleId: number;
  previousUserId: number;
  currentUserId: number;
  transferDate: string;
}

export const fetchTransfers = () => {
  return api.get<Transfer[]>("/transfers");
};

export const createTransfer = (newTransfer: Transfer) => {
  return api.post<Transfer>("/transfers", newTransfer);
};
