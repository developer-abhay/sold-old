// Get All phones
async function getAllPhones(lastId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/sellable-phone`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch brands");
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
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/sellable-phone/${phoneId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch phone details");
  }

  const data = await response.json();
  return data.data.sellablePhone; // Return the phone details
}

//Fetch best price
async function calculateBestPrice(
  phoneId: any,
  deductionConditions: any,
  variantId = null
) {
  try {
    // Create the payload with the required conditions and variantId (if applicable)
    const payload: any = {
      deductionConditions, // Array of 26 boolean values
    };

    if (variantId) {
      payload.variantId = variantId; // Add variantId if the phone has variants
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/sellable-phone/${phoneId}/exact-price`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Send the payload as JSON in the request body
      }
    );

    // Handle response
    if (response.ok) {
      const { success, message, data } = await response.json();

      return data.exactPrice; // Return the exact price from the response data
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error calculating exact price");
    }
  } catch (error: any) {
    console.error("Failed to fetch exact price:", error.message);
    throw error; // Optionally rethrow the error to handle it further
  }
}

export {
  getAllPhones,
  getBrands,
  getModels,
  fetchPhoneById,
  calculateBestPrice,
};
