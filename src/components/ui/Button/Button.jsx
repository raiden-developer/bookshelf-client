import styles from './Button.module.scss'
import cn from 'classnames'

function Button({ children, size = 'large', type = 'primary' }) {
  const classnames = {
    [styles['btn--primary']]: type === 'primary',
    [styles['btn--secondary']]: type === 'secondary',
    [styles['btn--small']]: size === 'small',
    [styles['btn--large']]: size === 'large'
  }

  return (
    <button className={`${cn(styles.btn, classnames)}`}>{children}</button>
  )
}
export default Button
