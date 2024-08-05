import React from 'react'
import { GPA } from '../../components/gpa/gpa';
import { DegreeProgress } from '../../components/degreeProgress/degreeProgress';

export const Header = () => {
  return (
    <div style={{display: 'flex'}}>
        <p className='title'>Get Shit Done ❤️</p>
        <div className='degreeInfo'>
        Degree: Bachelor of Information<br/>
        <DegreeProgress />
        <GPA />
        </div>
      </div>
  )
}
