import { useEffect, useState } from "react";
import { QuizCallToAction } from "../../SectionTitleLeft";

export const databasesQuestionDict = {
    questionList0: [
        {
            questionText: 'Structuring and organizing data, in other words, data modeling is a skill required mainly by', 
            answerOptions: [
                { answerText: 'Data Model Designers', isCorrect: false },
                { answerText: 'Computer Systems Engineer', isCorrect: false },
                { answerText: 'Data Modelers', isCorrect: false },
                { answerText: 'All of the above', isCorrect: true },
            ],
        },
        {
            questionText: 'The following is one way to represent a relational data model',
            answerOptions: [
                { answerText: 'Database Diagram', isCorrect: true },
                { answerText: 'Tables', isCorrect: false },
                { answerText: 'Information Management System', isCorrect: false },
                { answerText: 'Microsoft SQL Server', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following is a type of database model',
            answerOptions: [
                { answerText: 'Relational Model', isCorrect: false },
                { answerText: 'Hierarchical Model', isCorrect: false },
                { answerText: 'Network Model', isCorrect: false },
                { answerText: 'All of the above', isCorrect: true },
            ],
        },
        {
            questionText: 'The process of organizing data in a database which includes creating tables and establishing relationships between tables according to rules designed to protect the data is called',
            answerOptions: [
                { answerText: 'Normalization', isCorrect: true },
                { answerText: 'Database Management System', isCorrect: false },
                { answerText: 'Relational Database', isCorrect: false },
                { answerText: 'All of the above', isCorrect: false },
            ],
        },
    ],
    questionList1: [
		{
			questionText: 'Data architecture is a skill primarily required for which of the following career options?', 
            answerOptions: [
				{ answerText: 'Data Analyst', isCorrect: false },
				{ answerText: 'Data Architect', isCorrect: true },
				{ answerText: 'Business Analyst', isCorrect: false },
				{ answerText: 'Web Developer', isCorrect: false },
			],
		},
		{
			questionText: 'These are steps in the data architecture development process',
			answerOptions: [
				{ answerText: 'Design, Documentation, Evaluation', isCorrect: true },
				{ answerText: 'Evaluation, Requests, Verification', isCorrect: false },
				{ answerText: 'Deployment, Maintenance, Training', isCorrect: false },
				{ answerText: 'Instalation, Testing, Maintenance', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is important when doing data architecture',
			answerOptions: [
				{ answerText: 'Defining data models', isCorrect: true },
				{ answerText: 'Creating a detailed business analysis', isCorrect: false },
				{ answerText: 'Perform statistical tests to data', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following processes is supported by strong data architecture',
			answerOptions: [
				{ answerText: 'Data Collection', isCorrect: false },
				{ answerText: 'Data Entry', isCorrect: false },
				{ answerText: 'Data Reading', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
	],
    questionList2: [
		{
			questionText: 'Knowing SQL is a skill required primarily for which of the following career options', 
            answerOptions: [
				{ answerText: 'Data Scientist', isCorrect: true },
				{ answerText: 'Mobile Developer', isCorrect: false },
				{ answerText: 'Hardware Engineer', isCorrect: false },
				{ answerText: 'Computer Technician', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following are a few of the basic SQL queries',
			answerOptions: [
				{ answerText: 'SELECT, INSERT, UPDATE', isCorrect: true },
				{ answerText: 'SELECT, DELETE, UPGRADE', isCorrect: false },
				{ answerText: 'SELECT, REMOVE, UPDATE', isCorrect: false },
				{ answerText: 'SELECT, REMOVE, UPGRADE', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following queries retrieves the "Student_ID" attribute from the table "Student"',
			answerOptions: [
				{ answerText: 'SELECT * FROM STUDENT.Student_ID;', isCorrect: false },
				{ answerText: 'SELECT * FROM STUDENT;', isCorrect: false },
				{ answerText: 'SELECT Student_ID FROM STUDENT;', isCorrect: true },
				{ answerText: 'SELECT Student_ID FROM *;', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is a reason learning SQL is important',
			answerOptions: [
				{ answerText: 'Allows you to save time', isCorrect: false },
				{ answerText: 'Allows you to automate data processes', isCorrect: false },
				{ answerText: 'Helps you learn other programming languages', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
	],
    questionList3: [
		{
			questionText: 'Database management is a skill required primarily for which of the following career options', 
            answerOptions: [
				{ answerText: 'Hardware Engineer', isCorrect: false },
				{ answerText: 'Database Management System', isCorrect: false },
				{ answerText: 'Database Administrators', isCorrect: true },
				{ answerText: 'Web Developer', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is one of the tasks that a Database Management System makes easier',
			answerOptions: [
				{ answerText: 'Regularly create security copies of the data', isCorrect: true },
				{ answerText: 'Store data at a single site to be used by several other systems', isCorrect: false },
				{ answerText: 'Store data distributed from various sites', isCorrect: false },
				{ answerText: 'Organizing databases to improve performance', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is a type of database system',
			answerOptions: [
				{ answerText: 'Centralized', isCorrect: false },
				{ answerText: 'Relational', isCorrect: false },
				{ answerText: 'Hierarchical', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'It is important to control who has access to the data of a company',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
	]
};

function DatabasesQuiz({ questionList }) {
    

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

export default DatabasesQuiz;