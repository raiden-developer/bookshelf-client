import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.svg'

import styles from './Logo.module.scss'

function Logo({ className = '' }) {
  return (
    <Link to='/' className={`${styles.logo} ${className}`} >
      <img src={logo} alt="Логотип" />
    </Link >
  )
}

export default Logo
