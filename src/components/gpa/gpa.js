import React, { useEffect, useState } from 'react';

export const GPA = () => {
  let coursesCompleted = 0;
  let gpaCalc = 0;
  let cgpa = 0;


  const [ courseData, setCourseData] = useState([])

  useEffect(() => {
    const courseData = JSON.parse(localStorage.getItem('courseData'));
    if (courseData) {
      setCourseData(courseData);
    }
  }, []);

  Object.keys(courseData).forEach(key => {
    if (courseData[key]['isCompleted']) {
      coursesCompleted += 1;
      gpaCalc += parseInt(courseData[key]['finalgrade']);

    }
  });

  const gpaPer = coursesCompleted > 0 ? (gpaCalc / coursesCompleted).toFixed(0) : 0;
  

  if (gpaPer >= 85) {
    cgpa = 4.0;
  } else if (gpaPer >= 80 && gpaPer < 85) {
    cgpa = 3.7;
  } else if (gpaPer >= 77 && gpaPer < 80) {
    cgpa = 3.3;
  } else if (gpaPer >= 73 && gpaPer < 77) {
    cgpa = 3.0;
  } else if (gpaPer >= 70 && gpaPer < 73) {
    cgpa = 2.7;
  } else if (gpaPer >= 67 && gpaPer < 70) {
    cgpa = 2.3;
  } else if (gpaPer >= 63 && gpaPer < 67) {
    cgpa = 2.0;
  } else if (gpaPer >= 60 && gpaPer < 63) {
    cgpa = 1.7;
  } else if (gpaPer >= 57 && gpaPer < 60) {
    cgpa = 1.3;
  } else if (gpaPer >= 53 && gpaPer < 57) {
    cgpa = 1.0;
  } else if (gpaPer >= 50 && gpaPer < 53) {
    cgpa = 0.7;
  } else {
    cgpa = 0.0;
  }

  return (
    <div>CGPA: {cgpa.toFixed(2)}</div>
  );
};