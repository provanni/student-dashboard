import React from 'react'
import '../index.css'
import { Nav } from '../components/nav/nav'
import { Header } from '../components/header/header'

const INF352 = () => {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Nav />
      <div style={{display: 'block', position: 'relative'}}>
      <Header/>
      <div style={{width: '300', float: 'left', paddingLeft: '100px'}}>
      <h2>Textbooks</h2>
        
        <h2>Schedule</h2>
        <table>
          <tr>
            <th>Week</th>
            <th>Readings</th>
            <th>Topics</th>
          </tr>
          <tr>
            <td>Week 1 (Sept 3)</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 1</li>
                <li><strong>F. </strong>Ch 1.1</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Introduction to Computational Reasoning</li>
                <li>Tutorial 1</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <div style={{width: '330px', float: 'right'}}>
      <h2>Course Info</h2>
      <table style={{textAlign: 'left'}}>
        <tr>
          <th>Instructor</th>
          <td>Olivier St-Cyr</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>olivier.st.cyr@utoronto.ca</td>
        </tr>
        <tr>
          <th>Office Hours</th>
          <td>Data</td>
        </tr>
        <tr>
          <th>Office Location</th>
          <td>BL636</td>
        </tr>
        <tr>
          <th>Class Time</th>
          <td>Tues 10:00am - 12:00pm</td>
        </tr>
        <tr>
          <th>Class Location</th>
          <td>Data</td>
        </tr>
        <tr>
          <th>Practical Time</th>
          <td>Wed 11:00am - 12:00pm</td>
        </tr>
        <tr>
          <th>Practical Location</th>
          <td>Data</td>
        </tr>
      </table>
      <h2>Course Description</h2>
      <p style={{textAlign: 'justify'}}>Students will develop a general sense of design and the role it plays in the construction of our
      built environment. Human-centered design practices will be taught. Students will learn to identify
      important characteristics of the built environment using observational methods drawn from art
      and design practices, to analyze these characteristics using theories and perspectives drawn from
      relevant scholarship, and to represent their analyses using techniques of design sketching.</p>
      </div>
      </div>
      </div>
  )
}

export default INF352