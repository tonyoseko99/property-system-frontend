// property api endpoints
const BASE_URL = "http://localhost:2020/api/property";

// get all properties
export const getProperties = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
};

// get a property by id
export const getProperty = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data = await res.json();
  return data;
};

// create a property
export const createProperty = async (property) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(property),
  });
  const data = await res.json();
  return data;
};

// update a property
export const updateProperty = async (id, property) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(property),
  });
  const data = await res.json();
  return data;
};

// delete a property
export const deleteProperty = async (id) => {
  const res = await fetch(`${BASE_URL}?id=${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};