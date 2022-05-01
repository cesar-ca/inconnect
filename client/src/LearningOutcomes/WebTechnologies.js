import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitleLeft, {SectionRow} from "../SectionTitleLeft";


function WebTechnologies() {
    return (
    <main className="myContainer">
      <div className="row">
        <SectionTitleLeft sectionTitle={"Web Technologies"}/>
        
        <div className="col-md-6" id="leftRegister">
          <h1 className="text-center">Fundamentals</h1>
          <p className="text-center" >Web technologies cover programming languages 
          that are used for web development such as JavaScript, HTML and CSS. 
          It covers communication protocols and aims to answer how the internet works. 
          It also covers HTTP(S) methods, general troubleshooting, and debugging.</p>
          <div className="list-group">
            <table className="table table-hover table-dark">
              <thead>
                <tr className="bg-primary text-center">
                  <th scope="col">Topic</th>
                  <th scope="col">Learn More</th>
                </tr>
              </thead>
              <tbody>
                <SectionRow sectionTopic={"JavaScript, HTML, CSS"} sectionValue={"/javascript_html_css"} />
                <SectionRow sectionTopic={"Web Design"} sectionValue={"/web_design"}/>
                <SectionRow sectionTopic={"Web Development"} sectionValue={"/web_dev"}/>
                <SectionRow sectionTopic={"Communication Protocols"} sectionValue={"/com_protocols"}/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
    )
}

export default WebTechnologies;