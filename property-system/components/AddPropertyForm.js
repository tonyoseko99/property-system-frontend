"use client";
import { useState } from "react";
import { createProperty } from "@/api/property/property";

function AddPropertyForm({ onClose, onAddProperty }) {
  const formData = {
    name: "",
    address: "",
    description: "",
    numberOfFloors: 0,
    totalArea: 0,
  };

  const [property, setProperty] = useState(formData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await createProperty(property);
      onAddProperty(data);
      onClose();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-black text-2xl font-bold mb-6">Add Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={property.name}
              onChange={(e) =>
                setProperty({ ...property, name: e.target.value })
              }
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={property.address}
              onChange={(e) =>
                setProperty({ ...property, address: e.target.value })
              }
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={property.description}
              onChange={(e) =>
                setProperty({ ...property, description: e.target.value })
              }
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="numberOfFloors"
              className="block text-sm font-medium text-gray-700"
            >
              Number of Floors
            </label>
            <input
              type="number"
              id="numberOfFloors"
              name="numberOfFloors"
              value={property.numberOfFloors}
              onChange={(e) =>
                setProperty({ ...property, numberOfFloors: e.target.value })
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
              value={property.totalArea}
              onChange={(e) =>
                setProperty({ ...property, totalArea: e.target.value })
              }
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-6 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
            >
              {loading ? "Loading..." : "Add Property"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPropertyForm;
