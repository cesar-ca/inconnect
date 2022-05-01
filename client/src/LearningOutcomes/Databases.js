import SectionTitleLeft, {SectionRow}  from "../SectionTitleLeft";

function Databases() {
  return (
  <main className="myContainer">
    <div className="row">
      <SectionTitleLeft sectionTitle={"Databases"}/>
      
      <div className="col-md-6" id="leftRegister">
        <h1 className="text-center">Fundamentals</h1>
        <p className="text-center" >Database fundamentals cover basics of 
        data, modeling databases, architecture, Structured Query Language 
        commands and query design.</p>
        <div className="list-group">
          <table className="table table-hover table-dark">
            <thead>
              <tr className="bg-primary text-center">
                <th scope="col">Topic</th>
                <th scope="col">Learn More</th>
              </tr>
            </thead>
            <tbody>
              <SectionRow sectionTopic={"Data Modeling"} sectionValue={"/data_modeling"} />
              <SectionRow sectionTopic={"Data Architecture"} sectionValue={"/data_architecture"}/>
              <SectionRow sectionTopic={"Structured Query Language"} sectionValue={"/sql"}/>
              <SectionRow sectionTopic={"Database Management"} sectionValue={"database_management"}/>  
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Databases;