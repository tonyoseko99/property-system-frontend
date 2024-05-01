"use client";
import { useState } from "react";
import { createFloor } from "@/api/property/floor";

function AddFloorForm({ propertyId, onClose, onAddFloor }) {
  const formData = {
    floorNumber: 0,
    totalArea: 0,
    propertyId: "",
  };

  const [floor, setFloor] = useState(formData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await createFloor(propertyId, floor);
      console.log(data);
      onAddFloor(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-black text-2xl font-bold mb-6">Add Floor</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="floorNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Floor Number
            </label>
            <input
              type="number"
              id="floorNumber"
              name="floorNumber"
              value={floor.floorNumber}
              onChange={(e) =>
                setFloor({ ...floor, floorNumber: e.target.value })
              }
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="totalArea"
              className="block text-sm font-medium text-gray-700"
            >
              Total Area
            </label>
            <input
              type="number"
              id="totalArea"
              name="totalArea"
              value={floor.totalArea}
              onChange={(e) =>
                setFloor({ ...floor, totalArea: e.target.value })
              }
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              {loading ? "Loading..." : "Add Floor"}
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

export default AddFloorForm;
