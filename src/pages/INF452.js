import React from 'react'
import '../index.css'
import { Nav } from '../components/nav/nav'
import { Header } from '../components/header/header'

const INF452 = () => {
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
          <td>Maher Elshakankiri</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>maher.elshakankiri@utoronto.ca</td>
        </tr>
        <tr>
          <th>Office Hours</th>
          <td>Data</td>
        </tr>
        <tr>
          <th>Office Location</th>
          <td>BL645</td>
        </tr>
        <tr>
          <th>Class Time</th>
          <td>Data</td>
        </tr>
        <tr>
          <th>Class Location</th>
          <td>Data</td>
        </tr>
        <tr>
          <th>Practical Time</th>
          <td>Data</td>
        </tr>
        <tr>
          <th>Practical Location</th>
          <td>Data</td>
        </tr>
      </table>
      <h2>Course Description</h2>
      <p style={{textAlign: 'justify'}}>Increasingly complex computational systems are embedded in nearly every aspect of our social, civic, and private
      lives. Treating them as impartial but opaque obfuscates how their conception, design, or implementation may
      yield biased or detrimental social outcomes. In this course, students are introduced to the core constraints and
      mechanisms that govern code: its design, organization, relationship to memory and runtime, and the trade-offs
      and decisions necessary for its creation. Students analyze, modify, and generate code to engage with social,
      ethical, and political issues in information science. Prior programming experience is welcome, but not required.</p>
      </div>
      </div>
      </div>
  )
}

export default INF452