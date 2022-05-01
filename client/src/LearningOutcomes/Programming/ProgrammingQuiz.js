import { useEffect, useState } from "react";
import { QuizCallToAction } from "../../SectionTitleLeft";

export const programmingQuestionDict = {
    questionList0: [
        {
            questionText: 'Which of the following uses Object-oriented programming to organize software design around data rather than functions', 
            answerOptions: [
                { answerText: 'Software Engineer', isCorrect: true },
                { answerText: 'Data Scientist', isCorrect: false },
                { answerText: 'Hardware Engineer', isCorrect: false },
                { answerText: 'All of the above', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following are examples of principles of object-oriented programming',
            answerOptions: [
                { answerText: 'Abstraction', isCorrect: false },
                { answerText: 'Inheritance', isCorrect: false },
                { answerText: 'Encapsulation', isCorrect: false },
                { answerText: 'All of the above', isCorrect: true },
            ],
        },
        {
            questionText: 'Encapsulation is the principle that states that all information is contained inside an object',
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following are benefits of object-oriented programming',
            answerOptions: [
                { answerText: 'Reusability', isCorrect: false },
                { answerText: 'Extensibility', isCorrect: false },
                { answerText: 'Flexibility', isCorrect: false },
                { answerText: 'All of the above', isCorrect: true },
            ],
        },
    ],
    questionList1: [
		{
			questionText: 'Which of the following focuses on problems at the intersection of algorithms, systems, and networking', 
            answerOptions: [
				{ answerText: 'Web Designer', isCorrect: false },
				{ answerText: 'Data Scientist', isCorrect: false },
				{ answerText: 'Algorithms Engineer', isCorrect: true },
				{ answerText: 'Data Analyst', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following are steps in the methodology used in algorithm and system design',
			answerOptions: [
				{ answerText: 'Design', isCorrect: false },
				{ answerText: 'Analysis', isCorrect: false },
				{ answerText: 'Implementation', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'In system algorithms, the design focuses on the simplicity of the algorithm, implementability and reusability',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
		{
			questionText: 'Algorithms are useful in a variety of fields, including web engineering',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
	],
    questionList2: [
		{
			questionText: 'Data structures have a wide and diverse scpe of usage across different careers such as', 
            answerOptions: [
				{ answerText: 'Software Engineer', isCorrect: true },
				{ answerText: 'Data Scientist', isCorrect: false },
				{ answerText: 'Hardware Engineer', isCorrect: false },
				{ answerText: 'Data Analyst', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following are examples of types of data structures',
			answerOptions: [
				{ answerText: 'Linear, Non-linear', isCorrect: true },
				{ answerText: 'Array, List', isCorrect: false },
				{ answerText: 'Graph, Tree', isCorrect: false },
				{ answerText: 'List, Tree', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is an example of linear data structures',
			answerOptions: [
				{ answerText: 'List', isCorrect: true },
				{ answerText: 'Graph', isCorrect: false },
				{ answerText: 'Tree', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is an example of non-linear data structures',
			answerOptions: [
				{ answerText: 'Array', isCorrect: false },
				{ answerText: 'Tree', isCorrect: true },
				{ answerText: 'Stack', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
	],
    questionList3: [
		{
			questionText: 'Which of the following use integrated development environments in their work', 
            answerOptions: [
				{ answerText: 'Web Designer', isCorrect: false },
				{ answerText: 'Data Scientist', isCorrect: false },
				{ answerText: 'Software Developer', isCorrect: true },
				{ answerText: 'Hardware Engineer', isCorrect: false },
			],
		},
		{
			questionText: 'Integrated development environments help to organize work flow and solve problems with code',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
		{
			questionText: 'Online IDEs provide an integrated development environment in the form of',
			answerOptions: [
				{ answerText: 'Infrastructure as a Service (IaaS)', isCorrect: false },
				{ answerText: 'Platform as a Service (PaaS)', isCorrect: false },
				{ answerText: 'Software as a Service (SaaS)', isCorrect: true },
				{ answerText: 'Desktop as a Service (DaaS)', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following do IDEs have',
			answerOptions: [
				{ answerText: 'Code Editor', isCorrect: false },
				{ answerText: 'Compiler', isCorrect: false },
				{ answerText: 'Debugger', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
	]
};

function ProgrammingQuiz({ questionList }) {
    

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questionList.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    return (

        <main className="myContainer">
        <div className="row">
          <div className="col-md-12" >
          </div>
          <div className="col-md-2">

          </div>
          <div className="col-md-8">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
          <div className='app'>
          {showScore ? (
				<><div className='score-section'>
                                You scored {score} out of {questionList.length}
                                <br>
                                </br><br>
                                </br><br>
                                </br>
                                {score === 4 ? "Great Work" : "Come back later to retake it!" }
                            </div></>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questionList.length}
						</div>
						<div className='question-text'>{questionList[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questionList[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>

<p>{showScore && (<QuizCallToAction/>) }

</p>

          
  
          </div>
        </div>
      </main> 
    )
}

export default ProgrammingQuiz;