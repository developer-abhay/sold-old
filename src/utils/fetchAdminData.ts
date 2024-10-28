// Get all deduction prices
const fetchDeductions = async () => {
  const config: any = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/deduction`,
    config
  );

  if (!response.ok) {
    throw new Error("Failed to fetch brands");
  }

  const { data } = await response.json();
  return data.deductions;
};

// Update Deduction
const updateDeductions = async (id: string, newPercentage: number) => {
  const config: any = {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newPercentage }),
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/deduction/${id}`,
      config
    );

    if (!response.ok) {
      throw new Error("Error updating deduction value");
    }

    const { success, message } = await response.json();
    return success;
  } catch (error) {
    console.error(error);
  }
};

// All Pickups
const getAllPickups = async () => {
  const config: any = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/pickup`,
    config
  );

  if (!response.ok) {
    throw new Error("Failed to fetch brands");
  }

  const { data, message } = await response.json();
  return data.pickups;
};

// Update pickup data
const updatePickupStatus = async (id: string, newStatus: string) => {
  const config: any = {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newStatus }),
  };
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/${id}/pickup`,
      config
    );

    if (!response.ok) {
      throw new Error("Failed to fetch brands");
    }

    const { message } = await response.json();
    console.log(message);
    return message;
  } catch (err) {
    console.log(err);
  }
};

export { fetchDeductions, updateDeductions, getAllPickups, updatePickupStatus };
