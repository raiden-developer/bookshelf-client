import logo from '../../../assets/images/logo.svg'

import styles from './Logo.module.scss'

function Logo({ className = '' }) {
  return (
    <a href="/" className={`${styles.logo} ${className}`}>
      <img src={logo} alt="Логотип" />
    </a>
  )
}
export default Logo
