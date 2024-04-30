// property api endpoints
const BASE_URL = "http://localhost:2020/api/property";

// get all properties
export const getProperties = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
};
