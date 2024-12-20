"use client";

import { useState } from "react";
import { sendAdminOTP, verifyAdminOTP } from "@/utils/admin.auth";
import { useAuth } from "@/context/AuthContext";

const AdminLogin = () => {
  const { setIsAuthenticated, setRole } = useAuth();
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"input" | "verify">("input");
  const [error, setError] = useState("");

  // Send otp
  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await sendAdminOTP(mobileNumber);
      if (response.success) {
        setStep("verify");
      } else {
        setError("Failed to send OTP. User might not exist.");
      }
    } catch (err) {
      setError("An error occurred while sending OTP.");
    }
  };

  // Verify otp and authenticate the admin
  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await verifyAdminOTP(mobileNumber, otp);
      if (response.success) {
        setIsAuthenticated(true);
        setRole("admin");
      } else {
        setError("Invalid OTP.");
      }
    } catch (err) {
      setError("An error occurred while verifying OTP.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {step === "input" && (
        <form onSubmit={handleSendOTP} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="p-2 border rounded"
            maxLength={10}
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Send OTP
          </button>
        </form>
      )}
      {step === "verify" && (
        <form onSubmit={handleVerifyOTP} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminLogin;
