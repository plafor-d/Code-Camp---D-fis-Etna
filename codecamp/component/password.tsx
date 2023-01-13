import { useState } from 'react'
import styles from 'styles/Home.module.css'

export default function Password() {
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <div className={styles.textbox}> 
      <label htmlFor="name"> Mot de passe : </label>
      <input onClick={togglePassword} required type={passwordShown ? 'text' : 'password'} type="password" onChange={(e) => setPassword(e.target.value)} placeholder='ex : 1234'/>
    </div>
  )
}