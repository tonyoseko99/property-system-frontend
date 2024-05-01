import { useState } from "react";
import { createUnit } from "@/api/property/unit";
import AddUnitForm from "./AddUnitForm";
import { useParams } from "next/navigation";

function UnitList({ units }) {
  const params = useParams();
  const id = params.id;
  console.log(`new id ${id}`);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleAddUnit = () => {
    fetchUnits();
    setShowModal(false);
  };

  return (
    <div className="w-full flex flex-col">
      <button
        className="mt-16 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        onClick={() => setShowModal(true)}
        style={{ marginLeft: "auto" }} // Add this style to move the button to the right
      >
        Add Unit
      </button>
      <table className="mt-6 border-collapse border border-gray-300 w-full">
        {/* Table content */}

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

      {showModal && (
        <AddUnitForm
          floorId={id}
          onClose={() => setShowModal(false)}
          onAddUnit={handleAddUnit}
        />
      )}
    </div>
  );
}

export default UnitList;
