import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const AdminPrivateRoute = (children) => {
  return localStorage.adminToken ? (
    children
  ) : (
    <Navigate to="/admin/signin"></Navigate>
  );
};

export default AdminPrivateRoute;
