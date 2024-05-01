"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getProperty } from "@/api/property/property";
import { getFloorByPropertyId } from "@/api/property/floor";
import Loader from "@/components/Loader";
import AddFloorForm from "@/components/AddFloorForm";

function PropertyDetails({ params }) {
  const [property, setProperty] = useState({});
  const [floors, setFloors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchProperty = async () => {
    try {
      const property = await getProperty(params.id);
      setProperty(property.data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const fetchFloors = async () => {
    try {
      const floors = await getFloorByPropertyId(params.id);
      setFloors(floors.data);
      console.log(floors);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchProperty();
    fetchFloors();
  }, []);

  if (loading || !property) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto mt-12 h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Property Details</h1>
        <div className="flex items-center">
          {/* add a floor button */}
          <button
            onClick={() => setShowModal(true)}
            className="mr-6 mt-16 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Floor
          </button>
          <Link href="/properties">
            <button className="mt-16 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
              Back
            </button>
          </Link>
        </div>
        {showModal && (
          <AddFloorForm
            propertyId={property.id}
            onClose={() => setShowModal(false)}
            onAddFloor={() => window.location.reload()}
          />
        )}
      </div>
      <div className="mt-6">
        <h2 className="text-black text-2xl font-bold mb-6">
          PropertyName: {property.name}
        </h2>
        {/* table to render floors */}
        <table className="mt-6 border-collapse border border-gray-300 w-1/2">
          <thead>
            <tr>
              <th className="p-2 bg-gray-200">Floor Number</th>
              <th className="p-2 bg-gray-200">Total Area</th>
              <th className="p-2 bg-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {floors.map((floor) => (
              <tr key={floor.id}>
                <td className="p-2 border border-gray-300">
                  {floor.floorNumber}
                </td>
                <td className="p-2 border border-gray-300">
                  {floor.totalArea}
                </td>
                <td className="p-2 border border-gray-300 flex gap-4 justify-center">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                    View Units
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PropertyDetails;
