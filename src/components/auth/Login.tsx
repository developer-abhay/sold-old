"use client";
import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const AuthModal: React.FC<any> = ({ text }) => {
  const [step, setStep] = useState(1); // Step 1 for Phone Input, Step 2 for OTP Input
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const handlePhoneSubmit = () => {
    // Logic to send OTP to the user's phone
    console.log(`Sending OTP to ${phoneNumber}`);
    setStep(2);
  };

  const handleOtpSubmit = () => {
    if (!isChecked) {
      alert("Please agree to the terms and conditions before proceeding.");
      return;
    }
    // Logic to validate OTP
    console.log(`Validating OTP: ${otp}`);
    // After validation, redirect or login
  };

  return (
    <Dialog.Root>
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
              {step === 1 ? "Enter Phone Number" : "Enter OTP"}
            </Dialog.Title>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                step === 1 ? handlePhoneSubmit() : handleOtpSubmit();
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
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
              ) : (
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg"
                  maxLength={6}
                  pattern="[0-9]*"
                />
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
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
                >
                  {step === 1 ? "Send OTP" : "Submit OTP"}
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
