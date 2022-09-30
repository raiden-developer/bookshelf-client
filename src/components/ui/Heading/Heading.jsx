import styles from './Heading.module.scss'
import cn from 'classnames'


function Heading({ level = 'h2', type = 'h3', children }) {
  const Tag = level

  const classnames = {
    [styles['heading__h1']]: type === 'h1',
    [styles['heading__h2']]: type === 'h2',
    [styles['heading__h3']]: type === 'h3',
  }

  return (
    <Tag className={cn(styles.heading, classnames)}>{children}</Tag>
  )
}
export default Heading
