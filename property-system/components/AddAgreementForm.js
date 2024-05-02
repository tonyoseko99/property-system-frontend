"use client";
import { useState } from "react";
import { createAgreement } from "@/api/tenant/agreement";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

function AddAgreementForm({ onAddAgreement }) {
  const router = useRouter();
  const params = useParams();
  const tenantId = params.id;
  console.log(`use params ${params.id}`);
  const [agreement, setAgreement] = useState({
    startDate: "",
    endDate: "",
    unitId: "",
    paymentFrequency: "",
  });

  const handleChange = (e) => {
    setAgreement({ ...agreement, [e.target.name]: e.target.value });
    console.log(agreement);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createAgreement(tenantId, agreement);
      console.log(data);
      onAddAgreement();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-black text-2xl font-bold mb-6">Add Agreement</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="startDate" className="text-black">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />

          <label htmlFor="endDate" className="text-black">
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />

          <label htmlFor="rentedUnitId" className="text-black">
            Rented Unit ID:
          </label>
          <input
            type="number"
            id="unitId"
            name="unitId"
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />

          <label htmlFor="paymentFrequency" className="text-black">
            Payment Frequency:
          </label>
          <select
            id="paymentFrequency"
            name="paymentFrequency"
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="MONTHLY">Monthly</option>
            <option value="QUARTERLY">Quarterly</option>
            <option value="YEARLY">Yearly</option>
          </select>

          <div className="flex justify-between">
            <button className="bg-blue-500 text-white rounded-md p-2">
              Add Agreement
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="bg-red-500 text-white rounded-md p-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAgreementForm;
