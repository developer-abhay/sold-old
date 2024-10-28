"use client";

import { useState } from "react";
import AdminDashboard from "./dashboard";
import AdminLogin from "./AdminLogin";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return isAuthenticated ? (
    <AdminDashboard isAuthenticated={isAuthenticated} />
  ) : (
    <AdminLogin setIsAuthenticated={setIsAuthenticated} />
  );
};

export default Admin;
