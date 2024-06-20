import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MenuAdmi from "../components/MenuAdmi/MenuAdmi";
import ProfileAdmi from "../components/ProfileAdmi/ProfileAdmi";
import styles from "../components/WhatsApp/Wsp.module.css"; 

const Admi = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const headers = document.querySelectorAll('header');
    const footers = document.querySelectorAll('footer');
    const wspComponents = document.querySelectorAll(`.${styles.container}`); 

    headers.forEach(header => header.style.display = "none");
    footers.forEach(footer => footer.style.display = "none");
    wspComponents.forEach(wsp => wsp.style.display = "none");

    return () => {
      headers.forEach(header => header.style.display = "");
      footers.forEach(footer => footer.style.display = "");
      wspComponents.forEach(wsp => wsp.style.display = "");
    };
  }, []);

  return (
    <>
      <MenuAdmi isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="profile" element={<ProfileAdmi />} />
      </Routes>
    </>
  );
};

export default Admi;
