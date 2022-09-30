import styles from './Field.module.scss'

function Field({
  type = 'text',
  labelText = '',
  id = "",
  placeholder = '',
  onChange,
  value,
  required
}) {
  return (
    <div className={styles.field}>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
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
