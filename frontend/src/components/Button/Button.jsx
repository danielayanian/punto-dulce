import styles from './Button.module.css'


function IconButton({ icon, children, className, styleIcon }) {
    return (
        <div className={`${styles.content} ${className}`}>
            {icon && <img src={icon} alt="Icon" className={styles.icon} />}
            {children}
        </div>
    );
}

export default function Button({ text, icon, styleIcon, className }) {
    return (
        <button type="submit" className={`${styles.buttonStyle} ${className || ''}`}>
            <IconButton icon={icon} styleIcon={styleIcon}>{text}</IconButton>
        </button>
    );
}
