"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const AdminSidebar = ({ route, setRoute }: any) => {
  console.log(route);
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      </div>
      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-4">
          <li>
            <Button
              className={cn(
                "w-full uppercase",
                route === "home" ? "bg-blue-900" : ""
              )}
              onClick={() => {
                setRoute("home");
              }}
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              className={cn(
                "w-full uppercase",
                route === "phone" ? "bg-blue-900" : ""
              )}
              onClick={() => {
                setRoute("phone");
              }}
            >
              Phone
            </Button>
          </li>
          <li>
            <Button
              className={cn(
                "w-full uppercase",
                route === "deduction" ? "bg-blue-900" : ""
              )}
              onClick={() => {
                setRoute("deduction");
              }}
            >
              deductions
            </Button>
          </li>
          <li>
            <Button
              className={cn(
                "w-full uppercase",
                route === "pickup" ? "bg-blue-900" : ""
              )}
              onClick={() => {
                setRoute("pickup");
              }}
            >
              pickup
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
