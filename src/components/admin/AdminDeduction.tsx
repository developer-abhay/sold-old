import { DEVICE_INFO } from "@/constants/deductions";
import React, { useState, useEffect } from "react";

const DeductionsComponent = () => {
  const [deductions, setDeductions] = useState(DEVICE_INFO);
  const [updatedDeductions, setUpdatedDeductions] = useState<any>({});

  // Fetch the deductions data from the backend
  useEffect(() => {
    const fetchDeductions = async () => {
      try {
        const response = await fetch("/api/deductions");
        const data = await response.json();
        setDeductions(data);

        // Set initial updatedDeductions object
        const initialDeductions: any = {};
        data.forEach((deduction: any) => {
          initialDeductions[deduction._id] = deduction.deductionPercentage;
        });
        setUpdatedDeductions(initialDeductions);
      } catch (error) {
        console.error("Error fetching deductions:", error);
      }
    };
    fetchDeductions();
  }, []);

  // Handle deduction percentage change for each question
  const handlePercentageChange = (id: any, value: any) => {
    setUpdatedDeductions({
      ...updatedDeductions,
      [id]: value,
    });
  };

  // Submit the updated percentages to the backend
  const handleSubmit = async () => {
    const updatedData = deductions.map((deduction: any) => ({
      ...deduction,
      deductionPercentage: updatedDeductions[deduction._id],
    }));

    try {
      const response = await fetch("/api/updateDeductions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        alert("Deductions updated successfully!");
      } else {
        console.error("Error updating deductions");
      }
    } catch (error) {
      console.error("Error updating deductions:", error);
    }
  };

  if (deductions.length === 0) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Deductions</h1>

      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Question</th>
            <th className="px-4 py-2 border">Favourable Response</th>
            <th className="px-4 py-2 border">Deduction (%)</th>
          </tr>
        </thead>
        <tbody>
          {deductions.map((deduction: any) => (
            <tr key={deduction._id}>
              <td className="px-4 py-2 border">{deduction.message}</td>
              <td className="px-4 py-2 border">
                {deduction.favourableValue ? "Yes" : "No"}
              </td>
              <td className="px-4 py-2 border">
                <input
                  type="number"
                  value={updatedDeductions[deduction._id]}
                  onChange={(e) =>
                    handlePercentageChange(deduction._id, e.target.value)
                  }
                  className="border px-2 py-1 w-20"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Update Deductions
      </button>
    </div>
  );
};

export default DeductionsComponent;
