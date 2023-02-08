import { type } from 'os'
import React from 'react'
import "./Advantage.css"

type AdvantageProps = {
    width?: string
    image: string
    title: string
    subtitle: string
}

const Advantage = ({width = "330px",  image, title, subtitle}:AdvantageProps) => {
  return (
    <div className="cbc-advantages-item" style={{width : width}}>
           <div className="advantages-item-img"><img src={image} alt="advantages-item-img"/></div>
           <div className="advantages-item-title">{title}</div>
           <div className="advantages-item-subtitle">{subtitle}</div>
    </div>
  )
}

export default Advantage