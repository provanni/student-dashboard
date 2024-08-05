import React from 'react'
import './nav.css'
import { DateComponent } from '../date/date'
import { NavLink } from "react-router-dom";

export const Nav = () => {

    
  return (
    <div className='navContainer'>
        <div className='navHello'>
        Today is:
        <DateComponent/> <br/><br/>
        
        <div style={{fontSize: '22px'}}>

        <NavLink to="/">Dashboard</NavLink><br/><br/>
        
        <NavLink to="/INF313">INF313</NavLink> <br/>
        <NavLink to="/INF352">INF352</NavLink> <br/>
        <NavLink to="/INF401">INF401</NavLink> <br/>
        <NavLink to="/INF452">INF452</NavLink> <br/>
        
        <br/>
        
        <a href='https://acorn.utoronto.ca/' target='_blank' rel="noreferrer">ACORN</a><br/>
        <a href='https://q.utoronto.ca/' target='_blank' rel="noreferrer">Quercus</a><br/>
        <a href='https://clockwork.studentlife.utoronto.ca/user/notetakingstudents/courses.aspx' target='_blank' rel="noreferrer">Notetaking</a><br/>
        <a href='https://degreeexplorer.utoronto.ca/degreeExplorer/currentStatus' target='_blank' rel="noreferrer">Degree Explorer</a><br/>
        <a href='https://ischool.utoronto.ca/current-students/academic-resources/academic-dates-deadlines/' target='_blank' rel="noreferrer">Important Dates</a><br/>
        <a href='https://clockwork.studentlife.utoronto.ca/custom/misc/home.aspx' target='_blank' rel="noreferrer">Accomodations</a><br/>
        <a href='https://folio.utoronto.ca/' target='_blank' rel="noreferrer">Folio</a><br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <NavLink to="/Admin">Admin</NavLink>
        </div> 
        </div>
        
            
       
    </div>
  )
}
