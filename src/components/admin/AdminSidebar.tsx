"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const AdminSidebar = ({ route, setRoute }: any) => {
  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      </div>
      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-4">
          <li>
            <Button
              className={cn(
                "w-full uppercase hover:bg-blue-800",
                route === "phone" ? "bg-blue-700" : ""
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
                "w-full uppercase hover:bg-blue-800",
                route === "deduction" ? "bg-blue-700" : ""
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
                "w-full uppercase hover:bg-blue-800",
                route === "pickup" ? "bg-blue-700" : ""
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
