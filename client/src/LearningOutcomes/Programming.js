import SectionTitleLeft, { SectionRow } from "../SectionTitleLeft";

function Programming() {
  return (
  <main className="myContainer">
    <div className="row">
      <SectionTitleLeft sectionTitle={"Programming"}/>
      <div className="col-md-6" id="leftRegister">
        <h1 className="text-center">Fundamentals</h1>
        <p className="text-center" >Programming fundamentals cover 
        object-oriented programming languages, systems, algorithms, 
        data structures, and will aim to tackle conceptual 
        understanding as well as hands-on experiences.</p>
        <div className="list-group">
          <table className="table table-hover table-dark">
            <thead>
              <tr className="bg-primary text-center">
                <th scope="col">Topic</th>
                <th scope="col">Learn More</th>
              </tr>
            </thead>
            <tbody>
              <SectionRow sectionTopic={"Object-oriented Programming"} sectionValue={"/oop"} />
              <SectionRow sectionTopic={"Systems and Algorithms"} sectionValue={"/sys_alg"}/>
              <SectionRow sectionTopic={"Data Structures"} sectionValue={"/data_structures"}/>
              <SectionRow sectionTopic={"Integrated Development Environment"} sectionValue={"/ide"}/>  
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Programming;