import React from 'react'


export const DateComponent = () => {

   
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();



  return (
    <div>{month}/{date}/{year}</div>
  )
}
