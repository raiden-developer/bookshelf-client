import { useState } from 'react'
import Field from '../../components/ui/Field/Field'
import styles from './Auth.module.scss'

function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.auth}>
      <form className='block' onSubmit={submitHandler}>
        <Field
          type='email'
          labelText='E-mail'
          id='email'
          placeholder='Введите e-mail'
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </div>
  )
}
export default Auth
