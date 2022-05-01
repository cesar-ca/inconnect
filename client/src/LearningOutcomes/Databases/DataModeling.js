import { SectionTitleQuiz } from "../../SectionTitleLeft";

function DataModeling() {


    return (
      <main className="myContainer">
        <div className="row">
          <SectionTitleQuiz sectionTitle={"Data Modeling"} quizSectionValue={"/data_modeling_quiz"}/>
          <div className="col-md-6" id="leftRegister">
            <h1 className="text-center">Fundamentals</h1>

            <p>Data modeling is a way of structuring and organizing data so that it can be
easily used by databases. <br></br> <br></br>We can think of data modeling as the instructions for building a
database, understanding that the word model means that to make a good database of
data, a model must be followed to achieve the desired end.
In other words, when modeling a database, it is necessary to know how to design and make
the data understandable.
Most data models can be represented by means of a diagram of
accompanying data.
<br></br><br></br>
It is a skill required mainly for Data Modelers and Data Model Designers. Data
modelers are computer systems engineers who design and implement data modeling solutions
using different types of databases.

<br></br>
<br></br>
There are many types of models, here are some of the more common ones:
<br></br><br></br>
<ul>o Relational Model: it is the most common model since it orders the data in tables
also known as relationships, each of which is made up of
Columns and rows. Each column lists an attribute of the entity in question by
example, price, zip code or date of birth. The model also
represents the types of relationships between tables, for example one-to-one relationships
one, one to many and many to many.</ul>
<br></br>

<ul>o Hierarchical Model: organizes the data in a tree structure, in which each
record has a single element or root. Records of the same level are classified
in a specific order. The model is good at describing many relationships of the
real world.</ul>

<br></br>
Most websites depend on a certain type of database to organize and
present data to users. Generally, there are intermediate programs that connect the server
web with the database.
The wide presence of databases allows them to be used in almost any field, from
online shopping up to a system of voters in a political campaign. Various industries have
developed their own standards for database design.
</p>
  
          </div>
        </div>
      </main> 
    )
}

export default DataModeling;