import { SectionTitleQuiz } from "../../SectionTitleLeft";

function DataStructures() {

    return (
      <main className="myContainer">
        <div className="row">
          <SectionTitleQuiz sectionTitle={"Data Structures"} quizSectionValue={"/data_structures_quiz"}/>
          <div className="col-md-6" id="leftRegister">
            <h1 className="text-center">Fundamentals</h1>
            <p>
            Data Structures are a specialized means of organizing and storing data in computers in such a
way that we can perform operations on the stored data more efficiently. Data structures have a
wide and diverse scope of usage across the fields of Computer Science and Software
Engineering. Data structure and data types are slightly different. Data structure is the collection
of data types arranged in a specific order. Data structures have a wide and diverse scope of usage across different job roles such as software
engineering.
<br></br> <br></br>
Types of Data Structure: data structures are divided into two categories

<br></br><br></br>
<ul>
- Linear data structure
</ul>

<ul>
- Non-linear data structure
</ul>
A Linear data structure have data elements arranged in sequential manner and each member
element is connected to its previous and next element. This connection helps to traverse a linear
data structure in a single level and in single run. Such data structures are easy to implement as
computer memory is also sequential. Examples of linear data structures are List, Queue, Stack,
Array etc.
<br></br><br></br>
A non-linear data structure has no set sequence of connecting all its elements and each element
can have multiple paths to connect to other elements. Such data structures supports multi-level
storage and often cannot be traversed in single run. Such data structures are not easy to
implement but are more efficient in utilizing computer memory. Examples of non-linear data
structures are Tree, BST, Graphs etc.

</p>
  
          </div>
        </div>
      </main> 
    )
}

export default DataStructures;