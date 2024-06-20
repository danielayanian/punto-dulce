import React, { useState, useEffect } from "react";
import styles from "../ProfileAdmi/ProfileAdmi.module.css";

const InputField = ({ label, type, name, value, onChange, icon, placeholder, readOnly, options, required }) => {
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    setShowIcon(value === "");
  }, [value]);

  return (
    <div className={styles.inputField}>
      {label && (
        <label>
          {label}
          {required && <span className={styles.requiredAsterisk}> *</span>}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {icon && showIcon && <span className={styles.inputIcon}>{icon}</span>}
        {type === "select" ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={styles.select}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input 
            type={type} 
            name={name} 
            value={value} 
            onChange={(e) => {
              setShowIcon(e.target.value === "");
              onChange(e);
            }} 
            placeholder={placeholder}
            readOnly={readOnly} 
            className={styles.inputForm}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
