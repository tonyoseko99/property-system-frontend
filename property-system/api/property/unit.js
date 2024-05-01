const BASE_URL = "http://localhost:2020/api/property/unit";

// create a unit
export const createUnit = async (floorId, unit) => {
  const res = await fetch(`${BASE_URL}/${floorId}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      unitNumber: unit.unitNumber,
      squareFt: unit.squareFt,
      unitStatus: unit.unitStatus,
      rentPerSqFt: unit.rentPerSqFt,
    }),
  });
  const data = await res.json();
  return data;
};
