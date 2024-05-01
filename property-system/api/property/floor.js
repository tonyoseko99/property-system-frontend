// a property has a number of floors
const BASE_URL = "http://localhost:2020/api/floor";

// get all floors
export const getFloors = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
};

// get a floor by property id
export const getFloorByPropertyId = async (id) => {
  const res = await fetch(`${BASE_URL}/getAllFloorsForProperty/${id}`);
  const data = await res.json();
  return data;
};

// create a floor for a property, takes in a property id
export const createFloor = async (propertyId, floor) => {
  const res = await fetch(`${BASE_URL}/${propertyId}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      floorNumber: floor.floorNumber,
      totalArea: floor.totalArea,
      property_id: propertyId,
    }),
  });
  const data = await res.json();
  return data;
};
