import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import Logo from '../Logo/Logo'

import styles from './Header.module.scss'

function Header() {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <div className={`${styles['header__inner']} container`}>
        <Logo />
        <span style={{ fontSize: '24px', fontWeight: '700' }}>Books Impact</span>
        <Button onClick={() => { navigate('/auth') }}>Вход/Регистрация</Button>
      </div>

    </header>
  )
}
export default Header
