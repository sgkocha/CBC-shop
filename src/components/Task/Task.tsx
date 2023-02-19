import React from 'react'
import "./Task.css"

type TaskProps = {
    image: string;
    title: string;
}

const Task = ({image, title}:TaskProps) => {
  return (
    <div className='cbc-task-item'>
        <div className="task-item-img"><img src={image} alt="task-logo" /></div>
        <div className="task-item-title">{title}</div>    
    </div>
  )
}

export default Task