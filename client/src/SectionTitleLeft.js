import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const SectionTitleLeft = ({ sectionTitle, sectionValue = "/" }) => {
  const history = useHistory();
  return (
  <div className="col-md-6" id="rightRegister" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
    <h1>{sectionTitle}</h1>
    <Link className="btn btn-primary" onClick={()=> window.top.close() ? window.top.close() : history.push(sectionValue)}> Previous Section </Link>
    </div>
  )
}

export const SectionTitleQuiz = ({ sectionTitle, quizSectionValue }) => {
  return (
  <div className="col-md-6" id="rightRegister" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
    <h1>{sectionTitle}</h1>
    <Link className="btn btn-primary" to={quizSectionValue}>Take Quiz</Link>
    </div>
  )
}

export const LearnMoreButton = ({ sectionValue }) => {
  const [disable, setDisable] = useState(false);
  return (
  <Link className="nav-link" href={sectionValue} to={sectionValue} target="_blank">
    <button className="btn btn-primary" disabled={disable} onClick={() => setDisable(true)}>
      Learn
    </button>
  </Link>
  )
}

export const SectionRow = ({ sectionTopic, sectionValue }) => {
  return (
    <tr className="bg-primary text-center">
      <td>{sectionTopic}</td>
      <td><LearnMoreButton sectionValue={sectionValue} /></td>
    </tr>
  )
}

export const QuizCallToAction = () => {
  return (
    <>
      <div className='score-section'>
        <br></br>
      </div>
      <Link className="btn btn-primary" onClick={()=> window.top.close()}>
        Go Back 
      </Link>
    </>
  )
}

export const LandingTopic = ({ topic, difficulty = "Fundamentals/Basic", sectionValue }) => {
  return (
    <tr className="bg-primary text-center">
      <td>{topic}</td>
      <td>{difficulty}</td>
      <td><LearnMoreButton sectionValue={sectionValue}/></td>
    </tr>
  )
}


export default SectionTitleLeft;
