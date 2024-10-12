"use client";
import AdminDeduction from "@/components/admin/AdminDeduction";
import AdminHome from "@/components/admin/AdminHome";
import AdminPhone from "@/components/admin/AdminPhone";
import AdminPickup from "@/components/admin/AdminPickup";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const isAuthenticated = true;
  const [route, setRoute] = useState("home");

  useEffect(() => {
    if (!isAuthenticated) {
      redirect("/admin");
    }
  }, []);

  return !isAuthenticated ? (
    ""
  ) : (
    <div className="flex h-screen w-screen">
      <AdminSidebar route={route} setRoute={setRoute} />
      <div className="p-5">
        {route === "home" ? (
          <AdminHome />
        ) : route === "phone" ? (
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
