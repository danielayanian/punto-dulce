import React, { useState, useEffect } from "react";
import MenuAdmi from "../components/MenuAdmi/MenuAdmi";

const Admi = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const headers = document.querySelectorAll('header');
    const footers = document.querySelectorAll('footer');

    headers.forEach(header => header.style.display = "none");
    footers.forEach(footer => footer.style.display = "none");

    return () => {
      headers.forEach(header => header.style.display = "");
      footers.forEach(footer => footer.style.display = "");
    };
  }, []);

  return (
    <>
      <MenuAdmi isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Admi;
