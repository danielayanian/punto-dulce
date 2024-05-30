import styles from './Button.module.css'

function Button({ text, icon }) {
    return (
        <button type="submit" className={styles.buttonStyle}>
            <img src={icon} alt="Icon" className={styles.icon}/>
            {text}
        </button>
    );
}
  
  export default Button;