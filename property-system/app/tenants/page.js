"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import { getTenants } from "@/api/tenant/tenant";
import AddTenant from "@/components/AddTenant";
import AddAgreementForm from "@/components/AddAgreementForm";
import Link from "next/link";

function Tenants() {
  const [tenants, setTenants] = useState([]);
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchTenants = async () => {
    try {
      const tenants = await getTenants();
      setTenants(tenants.data);
      console.log(tenants);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchTenants();
  }, []);

  return (
    <div className="container mx-auto mt-12 h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-black text-3xl font-bold">Tenants</h1>
        <button
          className="mt-16 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => setShowModal(true)}
        >
          Add Tenant
        </button>
      </div>
      {loading && <Loader />}
      {error && <div>Error: {error.message}</div>}

      <table className="min-w-full mt-12">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Phone Number</th>
            <th className="text-left">Address</th>
            <th className="text-left">Date of Birth</th>
            <th className="text-left">Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant) => (
            <tr key={tenant.id} className="bg-gray-100">
              <td>{tenant.name}</td>
              <td>{tenant.email}</td>
              <td>{tenant.phoneNumber}</td>
              <td>{tenant.address}</td>
              <td>{tenant.dateOfBirth}</td>
              <td>{tenant.status}</td>
              <td className="flex justify-center">
                {/* create agreement button */}
                <Link href={`/tenants/${tenant.id}`}>
                  <button className="mr-6 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
                    View
                  </button>
                </Link>
                <button className="mr-6 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
                  Edit
                </button>
                <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <AddTenant
          onClose={() => setShowModal(false)}
          onAddTenant={fetchTenants}
        />
      )}
    </div>
  );
}

export default Tenants;
