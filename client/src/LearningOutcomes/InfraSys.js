import SectionTitleLeft, { SectionRow } from "../SectionTitleLeft";

function InfraSys() {
  return (
  <main className="myContainer">
    <div className="row">
      <SectionTitleLeft sectionTitle={"Infrastructure and Systems"}/>
      <div className="col-md-6" id="leftRegister">
        <h1 className="text-center">Fundamentals</h1>
        <p className="text-center" >Infrastructure and systems cover 
        the different components of systems such as 
        servers, storage, network, security, software, 
        switches, and operating systems.</p>
        <div className="list-group">
          <table className="table table-hover table-dark">
            <thead>
              <tr className="bg-primary text-center">
                <th scope="col">Topic</th>
                <th scope="col">Learn More</th>
              </tr>
            </thead>
            <tbody>
              <SectionRow sectionTopic={"Servers and Storage"} sectionValue={"/servers_storage"} />
              <SectionRow sectionTopic={"Operating Systems"} sectionValue={"/operating_systems"}/>
              <SectionRow sectionTopic={"Switches and Routers"} sectionValue={"/switches_routers"}/>
              <SectionRow sectionTopic={"Network Security Software"} sectionValue={"/network_security"}/>  
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  )
}

export default InfraSys;