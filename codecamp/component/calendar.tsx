import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import { fetchUserConnected } from '../services/Users/users.service'
import { getCookie, setCookie } from 'typescript-cookie'
import { fetchMeleesData } from '../services/Melees/melee.service'
import { postUserMeleeData } from '../services/Users_Melees/user_melee.service'
import { Remove } from './admin'

export default function Calendar (){
  const [ melees, setMelees ] = useState()
  const [ user, setUser ] = useState()
  const [ button, setButton] = useState(<></>)

	useEffect(() => {
    fetchMeleesData().then((data) => {
      setMelees(data)
    })
    fetchUserConnected(getCookie('authenticator')).then((data) => {
        setUser(data)
    })
  }, [])

  const addMelee = (arg) => {
    postUserMeleeData(user.id, arg.event.id)
  }
	const handleEventClick = (arg) => {
    for(let i = 0; i<= user.groups.length; i++) {
      if(user.groups[i] === 'student') {
        setButton( <button onClick={() =>{ addMelee(arg) }}> Prendre la melee {arg.event.title}</button>) 
        break;
      }else if (user.groups[i] === 'admin'){
        setButton(<Remove />)
      }
    }
  }

	return (
    <div>
      <FullCalendar
        locale='fr'
        timeZone='UTC'
        plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={ melees && melees.map((melee, i) => {
          return ( { id: melee.id, title : melee.melee_name, start: melee.dateStart, end: melee.dateEnd, description:melee.comment } )
        }) }
        headerToolbar= {{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        slotMinTime='7:00:00'
        slotMaxTime='23:00:00'
        eventClick={handleEventClick}
      />
      {button}
    </div>
	)
}