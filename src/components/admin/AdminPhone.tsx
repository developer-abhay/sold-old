"use client";
import { getAllPhones } from "@/utils/fetchUserData";
import { useState, useEffect } from "react";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [newPhone, setNewPhone] = useState<any>([]);
  const [showForm, setShowForm] = useState(false);

  // Fetch phones from backend
  const fetchPhones = async () => {
    const data = await getAllPhones(""); // empty "" means fetch all phone
    setPhones(data);
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  // Handle form submission
  const handleAddPhone = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPhone }),
      };
      await fetch("/api/admin/phones", config); // post new phone to backend
      setNewPhone({
        name: "",
        image: "",
        series: [
          {
            name: "",
            models: [
              {
                name: "",
                variants: [""],
                img: "",
              },
            ],
          },
        ],
      });
      setShowForm(false);
      fetchPhones(); // refresh the phones list
    } catch (error) {
      console.error("Error adding phone:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Phones</h1>

      {/* Add phone button */}
      <button
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Close Form" : "Add Phone"}
      </button>

      {/* Add Phone Form */}
      {showForm && (
        <form onSubmit={handleAddPhone} className="mb-8 space-y-4">
          <div>
            <label className="block">Phone Name:</label>
            <input
              type="text"
              className="border p-2 w-full"
              // value={newPhone?.name}
              // onChange={(e) =>
              // setNewPhone({ ...newPhone, name: e.target.value })
              // }x
              required
            />
          </div>

          <div>
            <label className="block">Image URL:</label>
            <input
              type="text"
              className="border p-2 w-full"
              // value={newPhone.image}
              // onChange={(e) =>
              // setNewPhone({ ...newPhone, image: e.target.value })
              // }
              required
            />
          </div>

          {/* Add other fields as necessary for models, variants, etc.*/}

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Phone
          </button>
        </form>
      )}

      {/* Phones Table */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Models</th>
            <th className="py-2 px-4 border-b">Variants</th>
          </tr>
        </thead>
        <tbody>
          {phones.map((phone: any, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{phone.name}</td>
              <td className="py-2 px-4">
                <img src={phone.thumbnail} alt={phone.brand} width={50} />
              </td>
              <td>{phone.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Phones;
