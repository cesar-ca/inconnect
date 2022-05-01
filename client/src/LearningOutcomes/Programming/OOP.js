import { SectionTitleQuiz } from "../../SectionTitleLeft";

function OOP() {

    return (
      <main className="myContainer">
        <div className="row">
          <SectionTitleQuiz sectionTitle={"Object-oriented Programming"} quizSectionValue={"/oop_quiz"}/>
          <div className="col-md-6" id="leftRegister">
            <h1 className="text-center">Fundamentals</h1>
            <p>
            Object-oriented programming (OOP) is a computer programming model that organizes software
design around objects, rather than functions and logic. An object is a data field that has unique
attributes and behavior. The benefits of OOP include code reusability, scalability and efficiency.
<br></br> <br></br>

<ul>
- Reusability: is an important issue in software engineering for at least two major reasons. First
reusability is one means to cope with the pressures of producing ever larger and more functional
systems in an ever decreasing development cycle. Second, reliability can be improved by reusing previously developed, and
previously tested, components. The development of new code entails the additional costs in time
and money of testing, validation, and verification of the new code. 
</ul>
<ul>
    
- Extensibility: is important because software systems are long-lived and are subject to
user's demands for new features and added capability. Object-oriented programming can help to
satisfy this need through inheritance. 
</ul>
<ul>
- Flexibility: variations or modification can be
made without the need to modify numerous places in the system's code. Historically, many
software systems were very brittle in that the addition of a small change could only be
accomodated by making modifications in many, and often aparrently unrelated, parts of the
existing system.
</ul>
These are the features of object-oriented programming: objects, methods, and attributes.

<br></br><br></br>
<ul>
- Classes are user-defined data types that act as the blueprint for individual objects,
attributes and methods.
</ul>

<ul>
- Objects are instances of a class created with specifically defined data. Objects can
correspond to real-world objects or an abstract entity. When class is defined initially, the
description is the only object that is defined.
</ul>

<ul>
- Methods are functions that are defined inside a class that describe the behaviors of an
object. Each method contained in class definitions starts with a reference to an instance
object. Additionally, the subroutines contained in an object are called instance methods.
Programmers use methods for reusability or keeping functionality encapsulated inside
one object at a time.
</ul>
<ul>



- Attributes are defined in the class template and represent the state of an object. Objects
will have data stored in the attributes field. Class attributes belong to the class itself.

</ul>


</p>
  
          </div>
        </div>
      </main> 
    )
}

export default OOP;