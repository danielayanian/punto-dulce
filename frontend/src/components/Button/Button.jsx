import styles from './Button.module.css'
import gift from '../../../public/img/gift.svg'

function Button({ text, icon, styleIcon, className  }) {
    return (
        <button type="submit" className={`${styles.buttonStyle} ${className || ''}`}>
        <img src={gift} alt="Icon" className={styles.icon} style={styleIcon} />
        {text}
    </button>
    );
}
  
  export default Button;