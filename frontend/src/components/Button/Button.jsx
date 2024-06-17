import styles from "./Button.module.css";

function IconButton({ icon, children, className, styleIcon }) {
  return (
    <div className={`${styles.content} ${className}`}>
      {icon && <img src={icon} alt="Icon" className={styles.icon} />}
      {children}
    </div>
  );
}

export default function Button({ text, icon, styleIcon, className, onClick, isActive, children  }) {
  const buttonClass = `${styles.buttonStyle} ${className || ""} ${isActive? styles.active : ""}`;

  return (
  
   <button
      type="submit"
      className={buttonClass}
      onClick={(e) => {
        onClick && onClick(e);
        if (isActive) {
          // Si el botón está activo, puede cerrar el desplegable aquí
          // Por ejemplo, llamando a una función pasarDesplegable(false);
        }
      }}
    >
      <span className={`styleIcon ${styleIcon? styleIcon : ""}`}>
        <IconButton icon={icon} />
      </span>
      {text}
      {children}
    </button>
  );
}
