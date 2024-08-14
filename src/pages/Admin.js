import React, { useState, useEffect } from 'react';
import '../index.css';
import { Nav } from '../components/nav/nav';
import { Header } from '../components/header/header';
import initialCourseData from '../data/courseData.json';

const Admin = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [courseData, setCourseData] = useState(initialCourseData);
  const [selCourse, setSelCourse] = useState('');
  const [isCourseCompleted, setIsCourseCompleted] = useState('');
  const [courseFinalGrade, setCourseFinalGrade] = useState('');
  

  useEffect(() => {
    const storedData = localStorage.getItem('courseData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        if (parsedData && typeof parsedData === 'object') {
          setCourseData({ courses: parsedData });
        } else {
          console.error('Parsed data is not an object:', parsedData);
          setCourseData(initialCourseData);
        }
      } catch (error) {
        console.error('Failed to parse course data from localStorage:', error);
        setCourseData(initialCourseData);
      }
    } else {
      setCourseData(initialCourseData);
    }
  }, []);

  const handleJSONChange = () => {
    if (courseData && courseData.courses) {
      const key = Object.keys(courseData.courses).find(
        (key) => courseData.courses[key].course === selCourse
      );

      if (key) {
        const updatedCourses = {
          ...courseData.courses,
          [key]: {
            ...courseData.courses[key],
            isCompleted: isCourseCompleted === 'True',
            finalgrade: parseFloat(courseFinalGrade),
          },
        };

        setCourseData((prevState) => ({
          ...prevState,
          courses: updatedCourses,
        }));

        localStorage.setItem('courseData', JSON.stringify(updatedCourses));

        alert('Update complete!');
      } else {
        alert('Course not found.');
      }
    } else {
      alert('Course data is not properly initialized.');
    }
  };

  const handleUsernameChange = (e) => setUsernameInput(e.target.value);
  const handlePasswordChange = (e) => setPasswordInput(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const hardcodedCred = {
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
    };

    if (
      usernameInput === hardcodedCred.username &&
      passwordInput === hardcodedCred.password
    ) {
      setIsLoggedIn(true);
    } else {
      alert('Wrong email or password combination.');
    }
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsernameInput('');
    setPasswordInput('');
  };

  const handleSelectChange = (event) => {
    const selectedCourse = event.target.value;
    setSelCourse(selectedCourse);

    if (courseData && courseData.courses) {
      const selectedCourseData = Object.values(courseData.courses).find(
        (course) => course.course === selectedCourse
      );

      if (selectedCourseData) {
        setIsCourseCompleted(
          selectedCourseData.isCompleted ? 'True' : 'False'
        );
        setCourseFinalGrade(selectedCourseData.finalgrade);
      } else {
        setIsCourseCompleted('');
        setCourseFinalGrade('');
      }
    }
  };

  return (
    <div className="App" style={{ display: 'flex' }}>
      <Nav />
      <div style={{ display: 'block', position: 'relative' }}>
        <Header courseData={courseData} />
        <div style={{ width: '300px', float: 'left', paddingLeft: '100px' }}>
          <h2>Admin 🔑</h2>
          {isLoggedIn ? (
            <div className="adminSelect">
              <p>Select Course:</p>
              <form>
                <select value={selCourse} onChange={handleSelectChange}>
                  <option value="">---Select---</option>
                  {courseData.courses &&
                    Object.keys(courseData.courses).map((key, i) => (
                      <option
                        key={i}
                        value={courseData.courses[key].course}
                      >
                        {courseData.courses[key].course}
                      </option>
                    ))}
                </select>
                <p>Completed:</p>
                <select
                  value={isCourseCompleted}
                  onChange={(e) =>
                    setIsCourseCompleted(e.target.value)
                  }
                >
                  <option value="">---Select---</option>
                  <option value="True">True</option>
                  <option value="False">False</option>
                </select>
                <p>Final Grade:</p>
                <input
                  type="number"
                  value={courseFinalGrade}
                  onChange={(e) =>
                    setCourseFinalGrade(e.target.value)
                  }
                />
                <br />
                <button type="button" onClick={handleJSONChange}>
                  Update
                </button>
              </form>
              <button onClick={logOut}>Logout</button>
            </div>
          ) : (
            <div className="loginSelect">
              <form>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  id="username"
                  onChange={handleUsernameChange}
                />
                <label htmlFor="password">Password: </label>
                <input
                  id="password"
                  type="password"
                  onChange={handlePasswordChange}
                />
              </form>
              <br />
              <button onClick={handleLoginSubmit}>Login</button>
            </div>
          )}
        </div>
        <div style={{ width: '330px', float: 'right' }}>
          
        </div>
      </div>
    </div>
  );
};

export default Admin;
