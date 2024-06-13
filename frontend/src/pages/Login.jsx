
//Login
import React, { useEffect } from "react";
import Input from '../components/LoginInput/LoginInput';

export const LoginInput = () => {
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
    <div>
   <Input/>
   </div>
  );
};

export default LoginInput;