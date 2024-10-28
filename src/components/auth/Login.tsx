"use client";
import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { registerUser, sendOTP, verifyOTP } from "@/utils/user.auth";
import SpinLoader from "../SpinLoader";

import { useAuth } from "@/context/AuthContext";

const AuthModal: React.FC<any> = ({ text }) => {
  const [open, setOpen] = useState(false);

  const [step, setStep] = useState(1); // Step 1 for Phone Input, Step 2 for OTP Input
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState({
    blockOrStreet: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const [loading, setLoading] = useState(false);

  // Context
  const { isAuthenticated, setIsAuthenticated, role, setRole } = useAuth();

  const handlePhoneSubmit = async () => {
    if (!isChecked) {
      alert("Please agree to the terms and conditions before proceeding.");
      return;
    }
    if (phoneNumber.length != 10) {
      alert("Please enter a valid number");
      return;
    }
    setLoading(true);
    const { userExists, success }: any = await sendOTP(phoneNumber);

    if (success) {
      setLoading(false); // Logic to send OTP to the user's phone

      if (!userExists) {
        setStep(3);
      } else {
        setStep(2);
      }
    } else {
      setLoading(false);
      alert("Failed to send OTP. Try again.");
    }
  };

  const handleOtpSubmit = async () => {
    if (!isChecked) {
      alert("Please agree to the terms and conditions before proceeding.");
      return;
    }
    if (otp.length != 6) {
      alert("Please enter a valid otp");
      return;
    }
    setLoading(true);
    const { success, message }: any = await verifyOTP(phoneNumber, otp);

    setLoading(false);
    if (success) {
      console.log(`OTP verified`);
      setOpen(false);
      setIsAuthenticated(true);
      setRole("user");
    } else {
      alert(message || "OTP verification failed.");
    }

    // After validation, redirect or login
  };
  const handleRegisterSubmit = async () => {
    if (!isChecked) {
      alert("Please agree to the terms and conditions before proceeding.");
      return;
    }
    if (
      !email ||
      !password ||
      !name ||
      Object.values(address).some((val) => val === "")
    ) {
      alert("Please fill all required fields");
      return;
    }
    setLoading(true);
    await registerUser(name, email, password, phoneNumber, address);
    setLoading(false);
    setStep(2); // Proceed to OTP verification after registration
  };

  return isAuthenticated && role == "user" ? (
    <div>Hello! {name}</div>
  ) : (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="bg-amber-300 text-black hover:bg-amber-400 w-16 sm:w-32 rounded-lg text-base">
          {text}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className=" z-40 bg-black bg-opacity-70 fixed inset-0" />
        <Dialog.Content className="fixed top-1/2 left-1/2 min-w-[800px] min-h-[70vh] transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 flex ">
          <div className="w-1/2 flex flex-col justify-between">
            <Dialog.Title className="text-2xl font-semibold">
              Login/Register
            </Dialog.Title>
            <Image src={"loginBanner.svg"} alt="" width={400} height={400} />
          </div>
          <div className=" w-1/2">
            <Dialog.Title className="text-2xl font-semibold">
              {step === 1
                ? "Enter Phone Number"
                : step === 2
                ? "Enter OTP"
                : "Register"}
            </Dialog.Title>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                step === 1
                  ? handlePhoneSubmit()
                  : step === 2
                  ? handleOtpSubmit()
                  : handleRegisterSubmit();
              }}
              className="mt-5 flex flex-col  justify-between  h-[85%]"
            >
              {step === 1 ? (
                <div className="flex items-center border border-gray-300 p-2 rounded-lg">
                  <span className="text-gray-500 mr-2">+91</span>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    maxLength={10}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
              ) : step === 2 ? (
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg"
                  maxLength={6}
                  pattern="[0-9]*"
                />
              ) : (
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  />
                  {/* Address Fields */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Block/Street"
                      value={address.blockOrStreet}
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          blockOrStreet: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2 rounded-lg w-1/2"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      value={address.city}
                      onChange={(e) =>
                        setAddress({ ...address, city: e.target.value })
                      }
                      className="border border-gray-300 p-2 rounded-lg w-1/2"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="State"
                      value={address.state}
                      onChange={(e) =>
                        setAddress({ ...address, state: e.target.value })
                      }
                      className="border border-gray-300 p-2 rounded-lg w-1/2"
                    />
                    <input
                      type="text"
                      placeholder="Pincode"
                      value={address.pincode}
                      onChange={(e) =>
                        setAddress({ ...address, pincode: e.target.value })
                      }
                      className="border border-gray-300 p-2 rounded-lg w-1/2"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="termsCheckbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="termsCheckbox" className="text-sm">
                    I agree to the{" "}
                    {/* <a href="#" className="text-blue-500 underline"> */}
                    terms and conditions
                    {/* </a> */}
                  </label>
                </div>
                <button
                  type="submit"
                  className={cn(
                    "text-white px-4 py-2 rounded-lg w-full text-center flex justify-center",
                    isChecked
                      ? step == 1
                        ? phoneNumber.length == 10
                          ? "bg-blue-500"
                          : "bg-gray-400"
                        : step == 2
                        ? otp.length == 6
                          ? "bg-blue-500"
                          : "bg-gray-400"
                        : email && password && name && address.pincode
                        ? "bg-blue-500"
                        : "bg-gray-400"
                      : "bg-gray-400"
                  )}
                  disabled={!isChecked}
                >
                  {loading ? (
                    <SpinLoader />
                  ) : step === 1 ? (
                    "Send OTP"
                  ) : step === 2 ? (
                    "Submit OTP"
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AuthModal;
