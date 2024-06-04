import styles from './Button.module.css'

function Button({ text, icon, styleIcon, className  }) {
    return (
        <button type="submit" className={`${styles.buttonStyle} ${className || ''}`}>
        <img src={icon} alt="Icon" className={styles.icon} style={styleIcon} />
        {text}
    </button>
    );
}
  
  export default Button;