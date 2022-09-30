import { useState } from 'react'
import Button from '../../components/ui/Button/Button'
import Field from '../../components/ui/Field/Field'
import Heading from '../../components/ui/Heading/Heading'
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
        <Heading level='h1' type='h2' className="mb-5">Регистрация</Heading>
        <Field
          className="mb-4"
          type='email'
          labelText='E-mail'
          id='email'
          placeholder='Введите e-mail'
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Field
          className="mb-4"
          type='password'
          labelText='Пароль'
          id='password'
          placeholder='Введите пароль'
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button>Зарегестрироваться</Button>
      </form>
    </div>
  )
}
export default Auth
