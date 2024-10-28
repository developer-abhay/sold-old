"use client";

import AdminDashboard from "./dashboard";
import AdminLogin from "./AdminLogin";
import { useAuth } from "@/context/AuthContext";

const Admin = () => {
  const { isAuthenticated, role } = useAuth();

  return isAuthenticated && role == "admin" ? (
    <AdminDashboard />
  ) : (
    <AdminLogin />
  );
};

export default Admin;
