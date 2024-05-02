"use client";
import { useState } from "react";
import { createUnit } from "@/api/property/unit";
import { useParams } from "next/navigation";

function AddUnitForm({ onClose, onAddUnit }) {
  const params = useParams();
  const floorId = params.floorId;
  console.log(`new id param${params.floorId}`); 
  const [unit, setUnit] = useState({
    unitNumber: "",
    squareFt: "",
    unitStatus: "",
    rentPerSqFt: "",
  });

  const handleChange = (e) => {
    setUnit({ ...unit, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createUnit(floorId, unit);
      onAddUnit();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-black text-2xl font-bold mb-6">Add Unit</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="unitNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Unit Number
            </label>
            <input
              type="text"
              id="unitNumber"
              name="unitNumber"
              value={unit.unitNumber}
              onChange={handleChange}
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="squareFt"
              className="block text-sm font-medium text-gray-700"
            >
              Square Feet
            </label>
            <input
              type="number"
              id="squareFt"
              name="squareFt"
              value={unit.squareFt}
              onChange={handleChange}
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="unitStatus"
              className="block text-sm font-medium text-gray-700"
            >
              Unit Status
            </label>
            <select
              id="unitStatus"
              name="unitStatus"
              value={unit.unitStatus}
              onChange={handleChange}
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="VACANT">VACANT</option>
              <option value="OCCUPIED">OCCUPIED</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="rentPerSqFt"
              className="block text-sm font-medium text-gray-700"
            >
              Rent Per SqFt
            </label>
            <input
              type="number"
              id="rentPerSqFt"
              name="rentPerSqFt"
              value={unit.rentPerSqFt}
              onChange={handleChange}
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Add Unit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUnitForm;
