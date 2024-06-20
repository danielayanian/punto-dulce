
import React, { useEffect } from "react";
import Input from '../components/LoginInput/LoginInput';
import RegisterInput from "../components/Register/Register";
import styles from "../components/WhatsApp/Wsp.module.css"; 

export const LoginInput = () => {
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
    <div>
   <Input/>
   <RegisterInput />
   </div>
  );
};

export default LoginInput;