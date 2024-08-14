import React from 'react'
import '../index.css'
import { Nav } from '../components/nav/nav'
import { Header } from '../components/header/header'
import courseData from '../data/courseData.json'

const INF352 = () => {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Nav />
      <div style={{display: 'block', position: 'relative'}}>
      <Header  courseData={courseData} />
      <div style={{width: '300', float: 'left', paddingLeft: '100px'}}>
      <h2>Textbooks</h2>
        
      <h2>Schedule</h2>
        <div style={{height: '350px', overflow: 'scroll', overflowX: 'hidden'}}>
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
          <tr>
            <td>Week 2</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 2</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Binary and Encoding</li>
                <li>Tutorial 2</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Week 3</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 3</li>
                <li><strong>F. </strong>Ch 1.2</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Logic and Circuits</li>
                <li>Tutorial 3</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Week 4</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 4.1, 4.2, 5</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Problem Solving Principles</li>
                <li>Tutorial 4</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Week 5</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 5</li>
                <li><strong>F. </strong>Ch 8.1, 8.2</li>
                <li><strong>H. </strong>Ch 1, Ch 2</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Programming Constructs</li>
                <li>Tutorial 5</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Week 6</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 4.3, 4.4</li>
                <li><strong>F. </strong>Ch 5.3.4</li>
                <li><strong>H. </strong>Ch 3</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Decomposition and Modularity</li>
                <li>Tutorial 6</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Week 7</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 2</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Binary and Encoding</li>
                <li>Tutorial 2</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Week 8</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 2</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Binary and Encoding</li>
                <li>Tutorial 2</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Week 9</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 2</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Binary and Encoding</li>
                <li>Tutorial 2</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Week 10</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 2</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Binary and Encoding</li>
                <li>Tutorial 2</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Week 11</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 2</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Binary and Encoding</li>
                <li>Tutorial 2</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Week 12</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 2</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Binary and Encoding</li>
                <li>Tutorial 2</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Week 13</td>
            <td>
              <ul>
                <li><strong>R. </strong>Ch 2</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Binary and Encoding</li>
                <li>Tutorial 2</li>
              </ul>
            </td>
          </tr>
        </table>
        </div>
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