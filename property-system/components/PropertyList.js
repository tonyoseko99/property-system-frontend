import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import NoDataToDisplay from "./NoDataToDisplay";
import EditPropertyForm from "./EditPropertyForm";
import { deleteProperty } from "@/api/property/property";
import Link from "next/link";

function PropertyList({ properties }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (id) => {
    const propertyToEdit = properties.find((property) => property.id === id);
    setSelectedEvent(propertyToEdit);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProperty(id);
      toast.success("Property deleted successfully");
      window.location.reload();
    } catch (error) {
      toast.error("An error occurred while deleting the property");
    }
  };

  if (properties.length === 0) return <NoDataToDisplay />;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <ToastContainer />
      </div>
      <table className="mt-6 border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="p-2 bg-gray-200">Name</th>
            <th className="p-2 bg-gray-200">Address</th>
            <th className="p-2 bg-gray-200">Description</th>
            <th className="p-2 bg-gray-200">Number of Floors</th>
            <th className="p-2 bg-gray-200">Total Area</th>
            {/* actions like delete, view, edit*/}
            <th className="p-2 bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td className="p-2 border border-gray-300">{property.name}</td>
              <td className="p-2 border border-gray-300">{property.address}</td>
              <td className="p-2 border border-gray-300">
                {property.description}
              </td>
              <td className="p-2 border border-gray-300">
                {property.numberOfFloors}
              </td>
              <td className="p-2 border border-gray-300">
                {property.totalArea}
              </td>
              <td className="p-2 border border-gray-300 flex justify-center">
                <Link href={`/properties/${property.id}`}>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4">
                    View
                  </button>
                </Link>
                <button
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md mr-4"
                  onClick={() => handleEdit(property.id)}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md mr-4"
                  onClick={() => handleDelete(property.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && selectedEvent && (
        <EditPropertyForm
          onClose={() => setShowModal(false)}
          property={selectedEvent}
        />
      )}
    </div>
  );
}

export default PropertyList;
