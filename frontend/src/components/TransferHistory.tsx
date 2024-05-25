"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { loadTransfers } from "../redux/slices/transferSlice";

const TransferHistory: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { transfers, loading, error } = useSelector(
    (state: RootState) => state.transfers
  );

  useEffect(() => {
    dispatch(loadTransfers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Transfer History</h1>
      <ul>
        {transfers.map((transfer) => (
          <li key={transfer.id}>
            Vehicle ID: {transfer.vehicleId} - Previous User ID:{" "}
            {transfer.previousUserId} - Current User ID:{" "}
            {transfer.currentUserId} - Transfer Date: {transfer.transferDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransferHistory;
