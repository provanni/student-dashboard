import React, { useState } from 'react'
import '../index.css'
import { Nav } from '../components/nav/nav'
import { Header } from '../components/header/header'
import courseData from '../data/courseData.json'

const Admin = () => {
  const [selCourse, setSelCourse] = useState("");
  const [isCourseCompleted, setIsCourseCompleted] = useState("");
  const [courseFinalGrade, setCourseFinalGrade] = useState("");

  const handleSelectChange = (event) => {
    const selectedCourse = event.target.value;
    setSelCourse(selectedCourse);

    const selectedCourseData = Object.values(courseData.courses).find(course => course.course === selectedCourse);

    if (selectedCourseData) {
      setIsCourseCompleted(selectedCourseData.isCompleted ? "True" : "False");
      setCourseFinalGrade(selectedCourseData.finalgrade);
    } else {
      setIsCourseCompleted("");
      setCourseFinalGrade("");
    }
  };

  return (
    <div className="App" style={{ display: 'flex' }}>
      <Nav />
      <div style={{ display: 'block', position: 'relative' }}>
        <Header />
        <div style={{ width: '300px', float: 'left', paddingLeft: '100px' }}>
          <h2>Admin 🔑</h2>
          <div className='adminSelect'>
            <p>Select Course:</p>
            <form>
              <select value={selCourse} onChange={handleSelectChange}>
                <option value="">---Select---</option>
                {Object.keys(courseData.courses).map((key, i) => (
                  <option key={i} value={courseData.courses[key].course}>{courseData.courses[key].course}</option>
                ))}
              </select>
              <p>Completed:</p>
              <select value={isCourseCompleted} onChange={(e) => setIsCourseCompleted(e.target.value)}>
                <option value="">---Select---</option>
                <option value="True">True</option>
                <option value="False">False</option>
              </select>
              <p>Final Grade:</p>
              <input type='number' value={courseFinalGrade} onChange={(e) => setCourseFinalGrade(e.target.value)} />
              <br />
              <button type="button">Update</button>
            </form>
          </div>
        </div>
        <div style={{ width: '330px', float: 'right' }}>
          <h2>idk what goes here yet</h2>
        </div>
      </div>
    </div>
  );
}

export default Admin;
