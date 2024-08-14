import React from 'react'
import '../index.css'
import { Nav } from '../components/nav/nav'
import { Header } from '../components/header/header'
import courseData from '../data/courseData.json'

const INF401 = () => {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Nav />
      <div style={{display: 'block', position: 'relative'}}>
      <Header  courseData={courseData} />
      <div style={{width: '300', float: 'left', paddingLeft: '100px'}}>
      <h2>Textbooks</h2>
        <p>None</p>
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
          <td>Anthony Naimi</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>Data</td>
        </tr>
        <tr>
          <th>Office Hours</th>
          <td>Data</td>
        </tr>
        <tr>
          <th>Office Location</th>
          <td>Data</td>
        </tr>
        <tr>
          <th>Class Time</th>
          <td>Mon 9:00am - 11:00am</td>
        </tr>
        <tr>
          <th>Class Location</th>
          <td>Data</td>
        </tr>
        <tr>
          <th>Tutorial Time</th>
          <td>Mon 11:00am - 12:00pm</td>
        </tr>
        <tr>
          <th>Tutorial Location</th>
          <td>Data</td>
        </tr>
      </table>
      <h2>Course Description</h2>
      <p style={{textAlign: 'justify'}}>While a university is student-centred and explicitly focused on facilitating structured student learning, a
      workplace is focused on its own strategic goals, stakeholders, and clients. Unstructured employee learning is
      peripheral to the purpose of the organization. Yet high-achieving professionals are actively engaged in
      continuous learning throughout their careers. A commitment to reflective practice, and to conscious articulation
      of career goals and professional identity, are crucial skills for lifelong career learning. </p>
      </div>
      </div>
      </div>
  )
}

export default INF401