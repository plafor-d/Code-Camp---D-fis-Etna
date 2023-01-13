import { useState } from "react"
import styles from 'styles/Home.module.css'

function Promo(props : any) {
  const [activated, setActivated] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('Promotion: '+props.promo.term.term_name  + props.promo.term.promo +' ⏵')
  const [students, setStudents] = useState(props.promo.students)

  const handleOnClick = () => {
    setActivated(!activated)
    if (activated) { setMessage('Promotion: '+props.promo.term.term_name  + props.promo.term.promo +' ⏵')}
    else { setMessage('Promotion: '+props.promo.term.term_name + props.promo.term.promo +' ⏷')}
  }
  return (
    <div className={styles.textbox1}>
      <h3 className={styles.texta} onClick={handleOnClick}>{message}</h3>
      { activated && <div> {students && students.map((student, i) => {
          return ( 
        <div>
          <tr className={styles.tableau}>
            <td className={styles.box}>{student.login}</td>
            <td>{student.firstname}</td>
            <td>{student.lastname} </td>
          </tr>
        </div> 
          )
        }) }
        </div>
        }
    </div>
  )
}

export default Promo

