"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateProperty } from "@/api/property/property";

function EditPropertyForm({ onClose, property }) {
  const [updatedProperty, setUpdatedProperty] = useState(property);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await updateProperty(property.id, updatedProperty);
      console.log(data);
      onClose();
      router.push("/properties");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-black text-2xl font-bold mb-6">Edit Property</h2>
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
              value={updatedProperty.name}
              onChange={(e) =>
                setUpdatedProperty({ ...updatedProperty, name: e.target.value })
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
              value={updatedProperty.address}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  address: e.target.value,
                })
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
              value={updatedProperty.description}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  description: e.target.value,
                })
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
              value={updatedProperty.numberOfFloors}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  numberOfFloors: e.target.value,
                })
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
              value={updatedProperty.totalArea}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  totalArea: e.target.value,
                })
              }
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {loading ? "Loading..." : "Update"}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded-md ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPropertyForm;
