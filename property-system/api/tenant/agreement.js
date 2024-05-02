const BASE_URL = "http://localhost:2021/api/agreement";

// get all agreements
export const getAgreements = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
};

// create an agreement
export const createAgreement = async (tenantId, agreement) => {
  const res = await fetch(`${BASE_URL}/${tenantId}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(agreement),
  });
  const data = await res.json();
  return data;
};
