import React from 'react'
import courseData from '../../data/courseData.json'


export const DegreeProgress = () => {

    var coursesCompleted = 0;
    var degreeProgress = 0;

    Object.keys(courseData.courses).forEach(key => {

        if (courseData.courses[key]['isCompleted'] === true){
          coursesCompleted += 1;
        }

        degreeProgress = (coursesCompleted/22)*100;
    })
  return (
    <div>Progress: {degreeProgress.toFixed(2)}%</div>
  )
}
