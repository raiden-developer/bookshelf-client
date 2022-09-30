import Button from '../../ui/Button/Button'
import Logo from '../Logo/Logo'

import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles['header__inner']} container`}>
        <Logo />

        <Button>Вход/Регистрация</Button>
      </div>

    </header>
  )
}
export default Header
