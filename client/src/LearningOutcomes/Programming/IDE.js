import { SectionTitleQuiz } from "../../SectionTitleLeft";

function IDE() {


    return (
      <main className="myContainer">
        <div className="row">
          <SectionTitleQuiz sectionTitle={"Integrated Development Environment"} quizSectionValue={"/ide_quiz"}/>
          <div className="col-md-6" id="leftRegister">
            <h1 className="text-center">Fundamentals</h1>
            <p>An Integrated Development Environment (IDE) is an application that facilitates the development of
programs. They are designed to encompass all programming tasks in a single application,
One of the main benefits of an IDE is that it offers a central interface with all the
tools a developer needs.
Integrated Development Environments are used by different roles for example Software
Developer, Software Engineer, Web developer, Mobile developer.
<br></br> <br></br>

Most of the features in IDEs are meant to save time, like completion
smart code and automatic code generation, which eliminates the need to write
complete character sequences. They are intended to help developers organize their flow
work and solve problems. IDEs parse code so that errors caused by bugs
humans identify themselves in real time.
<br></br>
<br></br>
Cloud development environments are provided as software as a service (SaaS) and provide
a number of unique benefits compared to local development environments. no need
of downloading software and setting up dependencies and locales, then developers
they can start working on projects quickly.

<br></br><br></br>
Integrated development environments usually include:

<br></br><br></br>
<ul>
- Code editor: designed to write and edit code, they are distinguished from code editors.
text because they work to simplify the code editing process for
developers.
</ul>

<ul>
- Compiler: they transform the code that is written in a programming language into
a way that computers can run them
</ul>

<ul>
- Debugger: help developers to debug programs
</ul>


</p>
  
          </div>
        </div>
      </main> 
    )
}

export default IDE;