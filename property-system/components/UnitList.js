"use client";
import { useState } from "react";

function UnitList({ units }) {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center"></div>
      <table className="mt-6 border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="p-2 bg-gray-200">Unit Number</th>
            <th className="p-2 bg-gray-200">Square Ft</th>
            <th className="p-2 bg-gray-200">Rent Per Sq Ft</th>
            <th className="p-2 bg-gray-200">Unit Status</th>
            <th className="p-2 bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit) => (
            <tr key={unit.id}>
              <td className="p-2 border border-gray-300">{unit.unitNumber}</td>
              <td className="p-2 border border-gray-300">{unit.squareFt}</td>
              <td className="p-2 border border-gray-300">{unit.rentPerSqFt}</td>
              <td className="p-2 border border-gray-300">{unit.unitStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UnitList;
