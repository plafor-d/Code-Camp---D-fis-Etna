import Link from 'next/link'
import Popup from 'reactjs-popup'
import Image from 'next/image'
import profile from 'image/profile.png'
import styles from 'styles/Home.module.css'
import Login from '../component/login'
import Password from './password'
import { useRouter } from "next/router";
import { useState } from "react"
import { setCookie } from "typescript-cookie"
import { postLogin } from "../services/Users/users.service"

function Pop(props : any) {
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
   <div className={styles.roll}>
    <Popup trigger={<Image src={profile} alt={'profile'} width={40} height={40} />} position="bottom right" > 
     <form onSubmit={handleSubmit} className={styles.textbox}>
      <div className={styles.profil}>Profil <br />  
       <label className={styles.textbox} htmlFor="name">Utilisateur : </label>
         <input type="text" onChange={(e) => setLogin(e.target.value)} placeholder='ex : hello_w' />
          <Password />
        <button className={styles.buttone} type="submit"><span><Link href='/'>Connexion</Link></span></button>
        <small className={styles.errorMsg}>{message}</small>
       </div>
     </form>
    </Popup>
   </div>
  )
}

export default Pop 
