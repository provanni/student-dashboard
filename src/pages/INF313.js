import React from 'react'
import '../index.css'
import { Nav } from '../components/nav/nav'
import { Header } from '../components/header/header'

const INF313 = () => {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Nav />
      <div style={{display: 'block', position: 'relative'}}>
      <Header/>
      <div style={{width: '600', float: 'left', paddingLeft: '100px'}}>
        <h2>Textbooks</h2>
        <div style={{width: '600px'}}>
        <p>Riley, D. D., & Hunt, K. A. (2014). <a href='https://librarysearch.library.utoronto.ca/discovery/fulldisplay?context=L&vid=01UTORONTO_INST:UTORONTO&search_scope=UTL_AND_CI&tab=Everything&docid=alma991106488565606196'  target='_blank' rel="noreferrer">Computational thinking for the modern problem
        solver.</a> CRC press.</p>
        <p>Ferreira Filho, W. (2017). <a href='https://librarysearch.library.utoronto.ca/discovery/fulldisplay?context=L&vid=01UTORONTO_INST:UTORONTO&search_scope=UTL_AND_CI&tab=Everything&docid=alma991106488544806196' target='_blank' rel="noreferrer">Computer Science Distilled: learn the art of solving
        computational problems.</a> Code Energy</p>
        <p>Haverbeke, M. (2018). Eloquent JavaScript: A modern introduction to programming. 3rd
        Edition. No Starch Press.</p>
        </div>
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
          <td>Nada Al Masari</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>nada.almasri@utoronto.ca</td>
        </tr>
        <tr>
          <th>Office Hours</th>
          <td>Data</td>
        </tr>
        <tr>
          <th>Office Location</th>
          <td>BL649</td>
        </tr>
        <tr>
          <th>Class Time</th>
          <td>Tues 1:00pm - 3:00pm</td>
        </tr>
        <tr>
          <th>Class Location</th>
          <td>Data</td>
        </tr>
        <tr>
          <th>Tutorial Time</th>
          <td>Wed 1:00pm - 2:00pm</td>
        </tr>
        <tr>
          <th>Tutorial Location</th>
          <td>Data</td>
        </tr>
      </table>
      <h2>Course Description</h2>
      <p style={{textAlign: 'justify'}}>This course (INF313H1 — Computational Reasoning) introduces principles and concepts of computational
      thinking and reasoning by providing an overview of data structures and algorithms, logic in computing,
      and programming paradigms such as object orientation and functions. It is accompanied by tutorials and
      assignments that make these concepts tangible and enable students to engage productively in the design
      of computational systems. </p>
      </div>
      </div>
      </div>
  )
}

export default INF313