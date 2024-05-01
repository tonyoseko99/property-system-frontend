const BASE_URL = "http://localhost:2021/api/tenant";

// get all tenants
export const getTenants = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
};

// create a tenant
export const createTenant = async (tenant) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(tenant),
  });
  const data = await res.json();
  return data;
};
