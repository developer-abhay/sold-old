async function sendOTP(mobileNumber: string) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobileNumber: `${mobileNumber}` }),
  };
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/send-otp`,
      config
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Error: ${response.status} - ${response.statusText} \n ${errorText}`
      );
    }
    // Log the raw response for debugging purposes
    const contentType = response.headers.get("content-type");

    // Check if the content-type is JSON
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return { success: data.success, userExists: data.data.userExists };
    } else {
      const errorText = await response.text();
      console.error("Unexpected response type:", errorText);
    }
  } catch (err) {
    console.error("Failed to send OTP:", err);
  }
  return { success: false, userExists: "Admin does not exist" };
}

async function verifyOTP(mobileNumber: string, otp: string) {
  const config: any = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobileNumber: `${mobileNumber}`, otp }),
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/verify-otp`,
    config
  );
  const data = await response.json();
  return data;
}

async function registerUser(
  name: string,
  email: string,
  password: string,
  mobileNumber: string,
  address: {
    blockOrStreet: string;
    city: string;
    state: string;
    pincode: string;
  }
) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      mobileNumber: `+x91${mobileNumber}`,
      name,
      address: {
        blockOrStreet: address.blockOrStreet,
        city: address.city,
        state: address.state,
        pincode: address.pincode,
      },
    }),
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/register`,
      config
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Error: ${response.status} - ${response.statusText} \n ${errorText}`
      );
    }

    // const contentType = response.headers.get("content-type");

    // if (contentType && contentType.includes("application/json")) {
    const data = await response.json();
    return { success: data.success, message: data.message };
    // } else {
    // const errorText = await response.text();
    // console.error("Unexpected response type:", errorText);
    // throw new Error("Response is not JSON");
    // }
  } catch (err) {
    console.error("Failed to register user:", err);
    throw err; // Rethrow error for upstream handling
  }
}

// Sell phone
async function schedulePickup(phoneId: string, variantId: string) {
  console.log(phoneId);
  const config: any = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ variantId }),
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/sellable-phone/${phoneId}/pickup`,
    config
  );
  const { message } = await response.json();
  return message;
}

export { sendOTP, verifyOTP, registerUser, schedulePickup };
