"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import UnitList from "@/components/UnitList";
import { getUnitsByFloorId } from "@/api/property/floor";
import AddUnitForm from "@/components/AddUnitForm";
import { useParams } from "next/navigation";

function Floor({params}) {
  const par = useParams();
  console.log(par.floorId); 
  const pathParams = params.id.split("/");
  console.log(pathParams); // logs the property id and floor id from the URL
  const floorId = pathParams[0];
  console.log(`last param id ${floorId}`); // logs the property id from the URL
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchUnits = async () => {
    try {
      const units = await getUnitsByFloorId(par.floorId);
      setUnits(units.data);
      console.log(units);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    if (par.floorId !== undefined) {
      fetchUnits();
    }
  }, [par.floorId]);

  const handleAddUnit = () => {
    fetchUnits();
    setShowModal(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto mt-12 h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Floor Details</h1>
        {/* <Link href="/properties">
          <button className="mt-16 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
            Back
          </button>
        </Link> */}
        {/* button to add a unit */}

        {/* <button
          className="mt-16 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => setShowModal(true)}
        >
          Add Unit
        </button> */}
        <UnitList units={units} />
      </div>
    </div>
  );
}

export default Floor;
