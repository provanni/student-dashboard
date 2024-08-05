import React from 'react'
import courseData from '../../data/courseData.json'

export const GPA = () => {

    var coursesCompleted = 0;
    var gpaCalc = 0;
    var gpa = 0;

    Object.keys(courseData.courses).forEach(key => {

      if (courseData.courses[key]['isCompleted'] === true){
        coursesCompleted += 1;
        gpaCalc += courseData.courses[key]['finalgrade'];
      }

      gpa = gpaCalc/coursesCompleted + "%";
       
    });

  return (
    <div>CGPA: {gpa}</div>
    
  )
}
