import { fetchDeductions, updateDeductions } from "@/utils/fetchAdminData";
import React, { useState, useEffect } from "react";

const DeductionsComponent = () => {
  const [allDeductions, setAllDeductions] = useState([]);

  // Fetch the deductions data from the backend
  const getDeductionQuestions = async () => {
    console.log("hrebjnvj");
    const data = await fetchDeductions();
    setAllDeductions(data);
  };

  useEffect(() => {
    getDeductionQuestions();
  }, []);

  if (allDeductions.length === 0) return <div>Loading...</div>;

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
          {allDeductions.map((deduction: any, index) => {
            return (
              <UpdateDeductionComp
                key={index}
                deduction={deduction}
                allDeductions={allDeductions}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DeductionsComponent;

//
// Individual deduction Values and update logic
//
const UpdateDeductionComp = ({ deduction }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<number>(deduction.deductionPercentage);

  // Submit the updated percentages to the backend
  const handleSubmit = async (id: string, value: number) => {
    setLoading(true);
    const success = await updateDeductions(id, value);

    if (success) {
      setLoading(false);
    }
  };

  return (
    <tr>
      <td className="px-4 py-2 border">{deduction.message}</td>
      <td className="px-4 py-2 border">
        {deduction.favourableValue ? "Yes" : "No"}
      </td>
      <td className="px-4 py-2 border">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="border px-2 py-1 w-20"
        />
        <button
          disabled={loading}
          style={{ backgroundColor: loading ? "#1E3A8A" : "" }}
          onClick={() => handleSubmit(deduction._id, value)}
          className="bg-blue-500 text-white px-3 py-2 ml-2 w-20 rounded hover:bg-blue-700"
        >
          {loading ? "..." : "Update"}
        </button>
      </td>
    </tr>
  );
};
