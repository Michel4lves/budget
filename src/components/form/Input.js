import styles from './formCss/Input.module.css'

export default function Input({ text, type, placeholder, value, name, id, handleOnChange }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value}
                name={name}
                id={id}
                onChange={handleOnChange}
            />
        </div>
    )
}
