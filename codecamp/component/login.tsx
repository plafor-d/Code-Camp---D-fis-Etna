import { useRouter } from "next/router";
import { useState } from "react"
import { setCookie } from "typescript-cookie"
import { postLogin } from "../services/Users/users.service"
import styles from "../styles/Home.module.css"

function Login(props : any) {
	const route = useRouter();
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState<string>()

  const handleSubmit = async (e : any) => {
    e.preventDefault()
    await postLogin(
      login,
      password
    )
      .then((res) => {
        setCookie('authenticator', res['set-cookie']);
        route.reload();
      })
      .catch(() => {
        setMessage('login or password incorrect')
      })
  }
    return (
      <div className={styles.profil}>
        <form onSubmit={handleSubmit}>
          Connexion
            <label>
              <p>Login</p>
              <input type="text" onChange={(e) => setLogin(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
            <small className={styles.errorMsg}>{message}</small>
          </form>
        </div>
    )
}

export default Login