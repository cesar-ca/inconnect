import { SectionTitleQuiz } from "../../SectionTitleLeft";

function DataArchitecture() {


    return (

        <main className="myContainer">
        <div className="row">
          <SectionTitleQuiz sectionTitle={"Data Architecture"} quizSectionValue={"/data_architecture_quiz"}/>
          <div className="col-md-6" id="leftRegister">
          <h1 className="text-center">Fundamentals</h1>
            <p>Data architecture refers to the models, policies, and rules that govern what data is
they are going to collect; how they will be stored, classified and exploited through the
technological infrastructure available.
It is a skill required primarily by Data Architects. 

<br></br> <br></br>The main functions in data architecture are the following:
<br></br>
<br></br>
<ul>- Manage data structures including design, creation, supervision,
administration and implementation</ul>

<ul>- Define data logic models and standards as a single source of information</ul>

<ul>- Develop database architecture strategies</ul>

<br></br>
Data architecture requires defining the technology architecture that supports the collection of
data, information exploitation, output and presentation. Therefore, it is important
follow analysis and structuring processes based on the business processes and operations of
the company. It is necessary to know the business and the sector well to build a suitable plan.

<br></br>
<br></br>
The Data Architecture Development Cycle involves:
<br></br><br></br>
<ul>- Requirements: Capture, document and prioritize the type of data obtained by the
company and determine the quality of the data. Only keep and store the data that
contain information relevant to the company.</ul>

<ul>- Design: Use database design patterns and tactics. The types of
necessary data models and the technologies that will be used to manage, store and
process the data.</ul>

<ul>- Documentation: It is necessary to communicate with the relevant stakeholders the design of the
data architecture.</ul>

<ul>- Evaluation: It is important to evaluate the design to identify possible problems.
Continuously analyzing and evaluating the architecture is essential to improve possible
system failures.</ul>


<br></br>
</p>
  
          </div>
        </div>
      </main> 
    )
}

export default DataArchitecture;