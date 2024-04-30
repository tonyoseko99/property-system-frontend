"use client";
import { useState, useEffect } from "react";
import { getProperties } from "../../api/property/property";
import Loader from "../../components/Loader";
import PropertyList from "@/components/PropertyList";
import AddPropertyForm from "@/components/AddPropertyForm";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchProperties = async () => {
    try {
      const properties = await getProperties();
      setProperties(properties.data);
      console.log(properties.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProperties();
  }, []);

  const handleAddProperty = () => {
    setShowModal(true);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto mt-12 h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Properties</h1>
        <button
          className="mt-16 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
          onClick={handleAddProperty}
        >
          Add Property
        </button>
      </div>
      <div>
        <PropertyList properties={properties} />

        {showModal && (
          <AddPropertyForm
            onClose={() => setShowModal(false)}
            onAddProperty={fetchProperties}
          />
        )}
      </div>
    </div>
  );
}

export default Properties;
