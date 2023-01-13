import styles from 'styles/Home.module.css'
import { useState } from "react";

function RemoveTag (props : any){
  const [activated, setActivated] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('Supprimer')
  
  const handleOnClick = () => {
    setActivated(!activated)
    if (activated) {setMessage('Supprimer')}
  
  }
  return (<button className={styles.button} onClick={handleOnClick}>-</button>)
}
function AddTag (props : any){
  const [activated, setActivated] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('Ajouter')
  
  const handleOnClick = () => {
    setActivated(!activated)
    if (activated) {setMessage('Ajouter')}
  }
  return (<button className={styles.button} onClick={handleOnClick}>+</button>)
}
function ModifTag () {
	const [activated, setActivated] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('Modifier')
  
  const handleOnClick = () => {
    setActivated(!activated)
    if (activated) {setMessage('Modifier')}
  }
	return (<button className={styles.button} onClick={handleOnClick}>↺</button>)
}
export {RemoveTag, AddTag, ModifTag};