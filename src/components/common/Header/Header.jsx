import Logo from '../Logo/Logo'

import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles['header__inner']} container`}>
        <Logo className="header__logo" />
      </div>
    </header>
  )
}
export default Header
