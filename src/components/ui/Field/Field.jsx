import styles from './Field.module.scss'

function Field({
  type = 'text',
  labelText = '',
  id = "",
  placeholder = '',
  onChange,
  value,
  required,
  className
}) {
  return (
    <div className={`${styles.field} ${className}`}>
      {labelText && <label className={styles.label} htmlFor={id}>{labelText}</label>}
      <input
        className={styles.input}
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}
export default Field
