import '../App.css'
import { Link } from 'react-router-dom'

function Frst(){
return(
    <>
        <div className="all">
  
  


  <div className="bubles">

    <div className="yellow"></div>
    <div className="pink"></div>
    
  </div>

  <div className="fTitle">


    
      <h1 className="web">calculator using
      <h1 className="S">C Language</h1>
      </h1>
    


    
  </div>

  <div className="side-boxes">

    <div className="projects">
      <h3>Overview</h3>
      <p> Implementing a calculator in C demonstrates your strong grasp of core programming concepts and algorithmic logic.<br/>
         Leveraging C capabilities, you can efficiently handle arithmetic operations like addition, subtraction, multiplication, and division.<br/>
          With a user-friendly interface and robust error-handling, you ensure a reliable and accurate user experience.<br/>
           This project showcases your technical expertise in delivering functional and efficient software solutions,<br/>
            highlighting your ability to solve real-world problems with precision and creativity.</p>
    </div>
      

  </div>

  <Link className="cssbuttons-io-button " to='./about.jsx'> 
        View more
      <div className="icon">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
      </div>
  </Link>







</div>
    </>
)
}
export default Frst