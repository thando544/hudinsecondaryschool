import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Gallery from "../pages/public/Gallery";
import Contact from "../pages/public/Contact"
import Login from "../pages/auth/Login"
import StudentDashboard from "../pages/student/StudentDashboard"
import ParentDashboard from "../pages/parent/ParentDashboard"
import AdminDashboard from "../pages/admin/Dashboard"
import Enrollment from "../pages/enrollment/Enrollment"

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/student/dashboard" element={<StudentDashboard/>} />
        <Route path="/parent/dashboard" element={<ParentDashboard/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/enroll" element={<Enrollment/>} />
      </Routes>
    </>
  );
}
