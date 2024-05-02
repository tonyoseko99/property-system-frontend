"use client";
import { useState } from "react";
import AddAgreementForm from "@/components/AddAgreementForm";
import React from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

function TenantDetails() {
  const router = useRouter();
  const params = useParams();
  const tenantId = params.id;
  console.log(`tenant id ${tenantId}`);

  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };

  const onAddAgreement = () => {
    router.push("/agreements");
    setShowModal(false);
  };
  return (
    <div>
      <AddAgreementForm
        tenantId={tenantId}
        onClose={onClose}
        onAddAgreement={onAddAgreement}
      />
    </div>
  );
}

export default TenantDetails;
