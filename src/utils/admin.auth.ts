export async function sendAdminOTP(mobileNumber: string) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobileNumber: `${mobileNumber}` }),
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/send-otp`,
      config
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Error: ${response.status} - ${response.statusText} \n ${errorText}`
      );
    }

    const data = await response.json();
    return data; // Expecting a message like "Otp sent successfully"
  } catch (error) {
    console.error("Failed to send OTP:", error);
    throw error;
  }
}

export async function verifyAdminOTP(mobileNumber: string, otp: string) {
  const config: any = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobileNumber: `${mobileNumber}`, otp }),
    //   credentials: "include", // To ensure cookies (JWT) are handled automatically
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/verify-otp`,
      config
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Error: ${response.status} - ${response.statusText} \n ${errorText}`
      );
    }

    const data = await response.json();
    return data; // Expecting a message like "Otp verified successfully"
  } catch (error) {
    console.error("Failed to verify OTP:", error);
    throw error;
  }
}
