import React from 'react';
import { GPA } from '../../components/gpa/gpa';
import { DegreeProgress } from '../../components/degreeProgress/degreeProgress';

export const Header = ({ courseData }) => {

  return (
    <div style={{ display: 'flex' }}>
      <p className='title'>Get Shit Done ❤️</p>
      <div className='degreeInfo'>
        Degree: Bachelor of Information<br />
        <DegreeProgress courseData={courseData} />
        <GPA courseData={courseData} />
      </div>
    </div>
  );
};
