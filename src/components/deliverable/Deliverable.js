import React from 'react'

export const Deliverable = ({course, deliverable, duedate, weight}) => {
  
  return (
    <div style={{border: '2px solid black', width: '650px', padding: '20px', display: 'flex', position: 'relative', borderRadius: '10px'}}>
    <div style={{width: '500px'}}>
    Course: {course} <br/>
    Deliverable: {deliverable}
    </div>
    <div style={{marginLeft: '40px'}}>
    Due: {duedate} <br/>
    Weight: {weight}
    </div>
    </div>
  )
}


