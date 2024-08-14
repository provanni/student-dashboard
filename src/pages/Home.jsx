import '../index.css'
import { Nav } from '../components/nav/nav';
import { Deliverable } from '../components/deliverable/Deliverable';
import deliverableData from '../data/deliverableData.json';
import { Header } from '../components/header/header';
import courseData from '../data/courseData.json'


function Home() {

   //sort deliverables data by date descending
   deliverableData.assignments.sort((a, b) => {
    return new Date(a.duedate) - new Date(b.duedate); 
  })

  //create current date
  const today = new Date();
  const month = today.getMonth()+1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = new Date(month + "/" + date + "/" + year)


  Object.keys(deliverableData.assignments).forEach(key =>{

    //convert to Date object
    const d = new Date(deliverableData.assignments[key].duedate)

    //compare current date with assignment duedate
    if(d < currentDate) {

      delete deliverableData.assignments[key]

    }
  })
  

  return (
    <div className="App" style={{display: 'flex'}}>
      <Nav />
      <div style={{display: 'block'}}>
      <Header  courseData={courseData} />
      <div style={{display: 'flex'}}>
      <div className='deliverablesContainer'>
      
        <h2 style={{position: 'sticky', top: '0', backgroundColor: 'white', zIndex: '1'}}>Upcoming Deliverables 📖</h2>

          {Object.keys(deliverableData.assignments).map((key, i) => (
            
            <div key={i} className='deliverables'>
            
            <Deliverable 
              course={deliverableData.assignments[key].course}
              deliverable={deliverableData.assignments[key].name}
              duedate={deliverableData.assignments[key].duedate}
              weight={deliverableData.assignments[key].weight}
            />
            </div>
          ))}
        
      </div>
      <div className='jobHub' style={{marginLeft: '25px'}}>
        <h2>Job Hub 💼</h2>
        <div style={{border: '2px solid black', width: '300px', padding: '20px', display: 'block', position: 'relative', borderRadius: '10px'}}>
        <div style={{display: 'flex'}}>
        <h4>Job Search</h4>
        <ul>
            <li><a href='https://clnx.utoronto.ca/myAccount/jobs/welcome.htm' target='_blank' rel="noreferrer">Career Learning (CLNx)</a></li>
            <li><a href='https://www.linkedin.com/jobs/' target='_blank' rel="noreferrer">LinkedIn</a></li>
            <li><a href='https://ca.indeed.com/' target='_blank' rel="noreferrer">Indeed</a></li>
            <li><a href='https://ischool-utoronto-csm.symplicity.com/' target='_blank' rel="noreferrer">Symplicity</a></li>
        </ul>
        </div>
        <div style={{display: 'flex'}}>
        <h4>Work Study</h4>
        <ul>
            <li><a href='https://clnx.utoronto.ca/myAccount/jobs/work-study/aboutws.htm' target='_blank' rel="noreferrer">Info Page</a></li>
            <li><a href='https://experientialmodules.utoronto.ca/work-study/' target='_blank' rel="noreferrer">Learning Modules</a></li>
            <li><a href='https://experientialmodules.utoronto.ca/work-study/' target='_blank' rel="noreferrer">Timesheet</a></li>
            
        </ul>
        </div>
        <div style={{display: 'flex'}}>
        <h4>Resume/CL</h4>
        <ul>
            <li><a href='https://studentlife.utoronto.ca/wp-content/uploads/Resume-Workbook.pdf' target='_blank' rel="noreferrer">Resume Workbook</a></li>
            <li><a href='https://studentlife.utoronto.ca/wp-content/uploads/CC-Resume-and-Cover-Letter-Toolkit.pdf' target='_blank' rel="noreferrer">Toolkit</a></li>
        </ul>
        </div>
        
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
