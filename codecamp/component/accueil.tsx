import { userAgent } from "next/server"
import { useState } from "react"
import { useEffect } from "react"
import { getCookie } from "typescript-cookie"
import {  fetchPromotionData, fetchPromotionsData } from "../services/Promotions/promotions.service"
import Promo from "./promo"

function Accueil (props: any) {
  const [accueil, setAcceuil] = useState(<></>)

  useEffect(() => {
    if (props.group.toString() === "student") {
      fetchPromotionData('813',getCookie('authenticator')).then((data) => {
        setAcceuil(<Promo promo={data}/>)
      })
    }
    else if (props.group=== "admin") {
      fetchPromotionData('813',getCookie('authenticator')).then((data) => {
        setAcceuil(<Promo promo={data}/>)   
    })
    }   
  }, [])
  return (
  <>
    {accueil}
  </>)
}

export default Accueil;
