import styles from 'styles/Home.module.css'
import { useState } from "react";
import { useRouter } from 'next/router';
import { deleteMeleeData, patchMeleeData, postmeleeData } from '../services/Melees/melee.service';

function Remove (props : any){
  const [activated, setActivated] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('Supprimer')
  
  const handleOnClick = () => {
    setActivated(!activated)
    if (activated) {setMessage('Supprimer')}
  
  }
  return (<button className={styles.button} onClick={handleOnClick}>Supprimer</button>)
}
function Add (props : any){
  const [activated, setActivated] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('Ajouter')
  
  const handleOnClick = () => {
    setActivated(!activated)
    if (activated) {setMessage('Ajouter')}
  }
  return (<button className={styles.button} onClick={handleOnClick}>Ajouter</button>)
}

function ModifyAdmin(props: any) {
  interface Melee {
    id : number,
    melee_name : string,
    comment: string,
    dateStart: string,
    dateEnd: string,
  }
  const initialMelee: Melee = {
    melee_name: props.melee.melee_name,
    comment: props.melee.comment,
    dateStart: props.melee.dateStart,
    dateEnd: props.melee.dateEnd,
    id: props.melee.id
  }
  const router = useRouter()
  const [melee, setMelee] = useState<Melee>(initialMelee)

  const handleRemove = async (id) => {
    await deleteMeleeData(id)
    router.reload()
  }
  const handleModify = async () => {
    patchMeleeData(props.melee.id, melee)
  }
  const onChangeHandler = (event: HTMLInputElement) => {
    const { name, value } = event
    setMelee((prev) => {
      return { ...prev, [name]: value }
    })
  }
  return (
    <div>
      <form onSubmit={handleModify}>
        <table className={styles.admin}>
          <tbody>
            <tr>
              <td>
                id:
                {props.melee.id}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className={styles.admin}
                  type="text"
                  name="melee_name"
                  value={melee.melee_name}
                  onChange={(e) => onChangeHandler(e.target)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className={styles.admin}
                  type="text"
                  name="comment"
                  value={melee.comment}
                  onChange={(e) => onChangeHandler(e.target)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className={styles.admin}
                  type="text"
                  name="dateStart"
                  value={melee.dateStart}
                  onChange={(e) => onChangeHandler(e.target)}/>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className={styles.admin}
                  type="text"
                  name="dateEnd"
                  value={melee.dateEnd}
                  onChange={(e) => onChangeHandler(e.target)}/>
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">Submit</button>
                <button
                  onClick={() => {
                    handleRemove(props.melee.id)
                  }}>
                    
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}
function Ajouter (props : any ) {
  
  const [meleename, setMeleename] = useState<string>()
  const [comment, setMeleecomment] = useState<string>()
  const [dateStart, setMeleedateStart] = useState<string>()
  const [dateEnd, setMeleedateEnd] = useState<string>()
  const handleAdd = async (e : any) => {
    e.preventDefault()
    await postmeleeData(
      meleename,
      comment,
      dateStart,
      dateEnd
      )}
return(
  <div className={styles.Add}>
        <form onSubmit={handleAdd}>
          <h2>Ajouter</h2>
            <label>
              <p>Nom</p>
              <input type="text" onChange={(e) => setMeleename(e.target.value)} />
            </label>
            <label>
              <p>Commentaire</p>
              <input type="text" onChange={(e) => setMeleecomment(e.target.value)} />
            </label>
            <label>
            <p>Date De Départ</p>
              <input type="datetime-local" onChange={(e) => setMeleedateStart(e.target.value)} />
            </label>
            <label>
            <p>Date De Fin</p>
              <input type="datetime-local" onChange={(e) => setMeleedateEnd(e.target.value)} />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
)
}

export {Remove, Add, ModifyAdmin, Ajouter };
