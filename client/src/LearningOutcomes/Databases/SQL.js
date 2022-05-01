import { SectionTitleQuiz } from "../../SectionTitleLeft";

function SQL() {
  return (
  <main className="myContainer">
    <div className="row">
      <SectionTitleQuiz sectionTitle={"Structured Query Language"} quizSectionValue={"/sql_quiz"}/>
      <div className="col-md-6" id="leftRegister">
        <h1 className="text-center">Fundamentals</h1>
        <p>SQL stands for structured query language, it is a language 
          of programming used with databases. It is a skill 
          required mainly for Data Scientists. It allows you to manipulate 
          and download data from a database. Has the ability to do 
          calculations and advanced algebra. It is used by most of the 
          companies that store data in a database.
          <br>
          </br> 
          <br>
          </br>
          SQL has some basic commands such as:
          <br></br>
          <br></br>
          <ul>SELECT: allows you to select the data to download</ul>
          <ul>WHERE: allows you to select which filter to apply to the data to download</ul>
          <ul>INSERT: allows inserting data</ul>
          <ul>DELETE: allows you to delete data</ul>
          <ul>UPDATE: allows you to update the data</ul>
          <br></br>
          An example of a query in SQL is:
          <br></br>
          <br></br>
          SELECT * FROM clients WHERE City = "Barcelona"
          <br></br>
          <br></br>
          This query will download the data from the 'clients' table where the client's city is Barcelona.
          <br></br>
          <br></br>
          <br></br>
        </p>
      </div>
    </div>
  </main> 
    )
}

export default SQL;