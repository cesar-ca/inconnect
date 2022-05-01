import { SectionTitleQuiz } from "../../SectionTitleLeft";

function SystemsAlgorithms() {

    return (
      <main className="myContainer">
        <div className="row">
          <SectionTitleQuiz sectionTitle={"Systems and Algorithms"} quizSectionValue={"/sys_alg_quiz"}/>
          <div className="col-md-6" id="leftRegister">
            <h1 className="text-center">Fundamentals</h1>
            <p>
            The field of computing has been revolutionized by the emergence of cloud computing, mobile
computing, big data, and machine learning. Algorithms and system design are important for the
advances in computing. System Algorithms focuses on problems at the intersection of algorithms
and systems and networking research. This field focuses on the fundamental principles and laws
that govern the systems and networks, and the algorithms that help to optimize and improve
these systems. 
<br></br> <br></br>

Algorithm engineers—also called algorithm developers—are responsible for the design and
integration of algorithms. Well-designed algorithms offer real-time solutions when installed into
a software or computer environment. The algorithms are useful in a variety of fields, including
web engineering.
<br></br>
<br></br>
The methodology is a cycle consisting of algorithm design, analysis, and implementation.


<br></br><br></br>
<ul>
Design: Systems algorithm
focuses on the simplicity of the algorithm, implementability in programming languages on real
hardware, and reusability of code.
</ul>

<ul>
Analysis: some problems can be solved with heuristics and randomized algorithms in a simpler and more
efficient fashion than with deterministic algorithms. This makes even simple randomized
algorithms difficult to analyze because there are subtle dependencies to be taken into account.
Implementation
</ul>
<ul>
Implementation: a reliable way to compare several implementations of an algorithm is to spend considerable time
on tuning and profiling, running the algorithms on multiple architectures, and looking at the
generated machine code.11
</ul>


</p>
  
          </div>
        </div>
      </main> 
    )
}

export default SystemsAlgorithms;