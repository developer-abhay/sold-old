"use client";
import AdminDeduction from "@/components/admin/AdminDeduction";
import AdminPhone from "@/components/admin/AdminPhone";
import AdminPickup from "@/components/admin/AdminPickup";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { redirect } from "next//navigation";
import { useState } from "react";

const AdminDashboard = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const [route, setRoute] = useState("phone");

  return !isAuthenticated ? (
    redirect("/admin")
  ) : (
    <div className="flex h-screen w-screen pl-64">
      <AdminSidebar route={route} setRoute={setRoute} />
      <div className="p-5">
        {/* {route === "home" ? (
          <AdminHome />
        )  */}
        {route === "phone" ? (
          <AdminPhone />
        ) : route === "deduction" ? (
          <AdminDeduction />
        ) : (
          <AdminPickup />
        )}
        {/* Add more dashboard components here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
