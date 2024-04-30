"use client";
import { useState, useEffect } from "react";
import { getProperties } from "../../api/property/property";

function Properties() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    getProperties();
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">Properties</h1>
      <div className="grid grid-cols-3 gap-4">
        {properties.map((property) => (
          <div key={property.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{property.name}</h2>
            {/* address */}
            <p>{property.address}</p>
            {/* description */}
            <p>{property.description}</p>
            {/* number of floors */}
            <p>{property.numberOfFloors}</p>
            {/* total area */}
            <p>{property.totalArea}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
