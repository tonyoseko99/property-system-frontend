"use client";
import { useState, useEffect } from "react";
import { getAgreements } from "@/api/tenant/agreement";
import Loader from "@/components/Loader";

function Agreements() {
  const [agreements, setAgreements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAgreements = async () => {
    try {
      const agreements = await getAgreements();
      setAgreements(agreements.data);
      console.log(agreements);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchAgreements();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto mt-12 h-screen">
      <div className="flex justify-between items-center">
        <h1 className="mt-16 text-3xl font-bold">Agreements</h1>
      </div>
      {error && <div>Error: {error.message}</div>}

      <table className="min-w-full mt-12">
        <thead>
          <tr>
            <th className="text-left">Start Date</th>
            <th className="text-left">End Date</th>
            <th className="text-left">Rent Amount</th>
            <th className="text-left">Rented Unit Id</th>
            <th className="text-left">Payment Frequency</th>
            <th className="text-left">Security Deposit</th>
            <th className="text-left">Created Date</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {agreements.map((agreement) => (
            <tr key={agreement.id} className="bg-gray-100">
              <td>{agreement.startDate}</td>
              <td>{agreement.endDate}</td>
              <td>{agreement.rentAmount}</td>
              <td>{agreement.rentedUnitId}</td>
              <td>{agreement.paymentFrequency}</td>
              <td>{agreement.securityDeposit}</td>
              <td>{agreement.createdDate}</td>
              <td>{agreement.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Agreements;
