import { useState } from "react"
import styles from "../styles/Home.module.css"
import Image from "next/image"

function Event(props : any) {
  const [activated, setActivated] = useState<boolean>(false)
  const [image, setImage] = useState<string>('/eye-open.png')   

  const handleOnClick = () => {
  setActivated(!activated)
  if (activated) {setImage('/eye-close.png') }
  else  { setImage('/eye-open.png') } 
  } 
  return (
    <tr className={styles.event}>
      <td><img src={image} onClick={handleOnClick} alt={""} width={22} height={22} ></img></td>
      <td>{props.event_name}</td>
      <td>{props.event_uv}</td>
      <td>{props.event_activiter}</td>
      <td>{props.event_localisation}</td>
      <td>{props.event_debut}</td>
      <td>{props.event_fin}</td>
    </tr>
  )
}

export default Event