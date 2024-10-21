// Get All phones and its details
async function fetchAvailablePhones(searchQuery = "", lastId = "") {
  const params = new URLSearchParams();

  if (searchQuery) {
    params.append("q", searchQuery);
  } else if (lastId) {
    params.append("lastId", lastId);
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/sellable-phone`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch available phones");
  }

  const { success, message, data } = await response.json();
  return data.sellablePhones;
}

// Get all brand names
async function getBrands() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/sellable-phone/brands`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch brands");
  }

  const { success, message, data } = await response.json();
  return data.brands;
}

// Get all models of a brand
async function getModels(brandName: string) {
  console.log(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/sellable-phone/brands/${brandName}`
  );
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/sellable-phone/brands/${brandName}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch brands");
  }

  const { success, message, data } = await response.json();

  return data.models;
}

// Get phone details by ID
async function fetchPhoneById(phoneId: string) {
  const response = await fetch(`/sellable-phone/${phoneId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch phone details");
  }

  const data = await response.json();
  return data.data.sellablePhone; // Return the phone details
}

export { fetchAvailablePhones, fetchPhoneById, getBrands, getModels };
