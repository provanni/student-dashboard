import React, { useState, useEffect } from 'react';

export const DegreeProgress = () => {

  const [ courseData, setCourseData] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('courseData'));
    if (data) {
      setCourseData(data);
    }
  }, []);

  const completedCourses = Object.values(courseData).filter(course => course.isCompleted).length;
  const totalCourses = Object.values(courseData).length;
  const progress = totalCourses > 0 ? ((completedCourses / totalCourses) * 100).toFixed(2) : 0;

  return (
    <div>Degree Progress: {progress}%</div>
  );
};
