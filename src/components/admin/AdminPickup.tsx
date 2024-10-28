// PickupDashboard.tsx
import React, { useState, useEffect } from "react";
// import { Pickup } from "../types"; // Import your types here
// import { fetchPickups, updatePickupStatus } from "@/utils/fetchAdminData"; // Assumed utility functions

const PickupDashboard: React.FC = () => {
  const [pickups, setPickups] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAllPickups = async () => {
    setLoading(true);
    try {
      // const data = await fetchPickups();
      // setPickups(data);
    } catch (error) {
      console.error("Failed to fetch pickups:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPickups();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pickup Dashboard</h1>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">User</th>
            <th className="px-4 py-2 border">Phone</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pickups.map((pickup: any) => (
            // <PickupRow key={pickup._id} pickup={pickup} />
            <PickupRow key={pickup._id} pickup={pickup} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PickupDashboard;

const PickupRow = ({ pickup }: any) => {
  const [status, setStatus] = useState(pickup.status);
  const [updating, setUpdating] = useState(false);

  const handleStatusUpdate = async () => {
    setUpdating(true);
    try {
      const updatedStatus = status === "Pending" ? "Completed" : "Pending";
      // const success = await updatePickupStatus(pickup._id, updatedStatus);
      // if (success) setStatus(updatedStatus);
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <tr>
      <td className="px-4 py-2 border">
        <div>
          <strong>{pickup.user.name}</strong>
          <div>{pickup.user.email}</div>
          <div>{pickup.user.mobileNumber}</div>
          <div>
            {pickup.user.address.city}, {pickup.user.address.state}
          </div>
        </div>
      </td>
      <td className="px-4 py-2 border">
        <div>
          <strong>{pickup.phone.name}</strong> ({pickup.phone.model})
          <div>Brand: {pickup.phone.brand}</div>
          {pickup.phone.variantPrices?.length ? (
            <div>Price: ₹{pickup.phone.variantPrices[0].basePrice}</div>
          ) : (
            <div>Price: ₹{pickup.phone.basePrice}</div>
          )}
        </div>
      </td>
      <td className="px-4 py-2 border text-center">{status}</td>
      <td className="px-4 py-2 border text-center">
        <button
          onClick={handleStatusUpdate}
          disabled={updating}
          className={`px-4 py-2 text-white rounded ${
            status === "Pending" ? "bg-yellow-500" : "bg-green-500"
          } ${
            updating ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-80"
          }`}
        >
          {updating
            ? "Updating..."
            : status === "Pending"
            ? "Mark Completed"
            : "Mark Pending"}
        </button>
      </td>
    </tr>
  );
};
