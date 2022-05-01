import './Home.scss';
import { LandingTopic, LearnMoreButton } from './SectionTitleLeft';

function Home() {

  return (
  <main className="myContainer">
    <div className="row">
      <div className="col-md-6" id="rightRegister" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <h1 className="text-center">Welcome to InConnect!</h1>
      </div>
      <div className="col-md-6" id="leftRegister">
        <h1 className="text-center">Learning Outcomes</h1>
        <p className="text-center" >Contribute, share, and shape your understanding 
        on how to use technical communication and organization 
        skills to optimize technical systems in the world of computing. 
        The main areas of focus include web technologies, databases fundamentals, 
        infrastructure and systems, and programming.</p>
        <div className="list-group">
          <table className="table table-hover table-dark">
            <thead>
              <tr className="bg-primary text-center">
                <th scope="col">Topic</th>
                <th scope="col">Difficulty</th>
                <th scope="col">Learn More</th>
              </tr>
            </thead>
            <tbody>
            <LandingTopic topic={"Web Technologies"} sectionValue="/web_technologies"/>
            <LandingTopic topic={"Databases"} sectionValue="/databases"/>
            <LandingTopic topic={"Infrastructure and Systems"} sectionValue="/infra_and_systems"/>
            <LandingTopic topic={"Programming"} sectionValue="/programming"/>          
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>   
  );
}

export default Home;
