import { useEffect, useState } from "react";
import { QuizCallToAction } from "../../SectionTitleLeft";

export const infraSysQuestionDict = {
    questionList0: [
        {
            questionText: 'Knowing about servers and storage types is a skill required mainly by which of the following career options', 
            answerOptions: [
                { answerText: 'Systems Administrator', isCorrect: false },
                { answerText: 'Server Engineer', isCorrect: false },
                { answerText: 'Network Administrator', isCorrect: false },
                { answerText: 'All of the above', isCorrect: true },
            ],
        },
        {
            questionText: 'Which of the following is an example of a type of server',
            answerOptions: [
                { answerText: 'Database Server', isCorrect: false },
                { answerText: 'Email Server', isCorrect: false },
                { answerText: 'Web Server', isCorrect: false },
                { answerText: 'All of the above', isCorrect: true },
            ],
        },
        {
            questionText: 'Which of the following is an example of long-term storage devices',
            answerOptions: [
                { answerText: 'Hard Disk', isCorrect: true },
                { answerText: 'Solid State Drive', isCorrect: false },
                { answerText: 'RAM', isCorrect: false },
                { answerText: 'All of the above', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following is a responsibility of a Systems Administrator',
            answerOptions: [
                { answerText: 'Installing server hardware', isCorrect: true },
                { answerText: 'Storing data permanently', isCorrect: false },
                { answerText: 'Storing data temporarily', isCorrect: false },
                { answerText: 'All of the above', isCorrect: false },
            ],
        },
    ],
    questionList1: [
		{
			questionText: 'Knowing about operating systems is a skill required primarily by which of the following career options', 
            answerOptions: [
				{ answerText: 'Data Scientist', isCorrect: false },
				{ answerText: 'Systems Developer', isCorrect: true },
				{ answerText: 'Web Developer', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is an example of an operating system',
			answerOptions: [
				{ answerText: 'Windows', isCorrect: false },
				{ answerText: 'MacOS', isCorrect: false },
				{ answerText: 'Ubuntu', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following is a main function of an operating system',
			answerOptions: [
				{ answerText: 'Memory and storage allocation', isCorrect: true },
				{ answerText: 'Reduce data redundancy and improve integrity', isCorrect: false },
				{ answerText: 'Define data models', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is an industry that employs system developers',
			answerOptions: [
				{ answerText: 'Finance', isCorrect: false },
				{ answerText: 'Technology', isCorrect: false },
				{ answerText: 'Telecommunications', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
	],
    questionList2: [
		{
			questionText: 'Which of the following uses switches and router to implement and oversee computer networks', 
            answerOptions: [
				{ answerText: 'Web Developer', isCorrect: false },
				{ answerText: 'Data Scientist', isCorrect: false },
				{ answerText: 'Netowrk Engineer', isCorrect: true },
				{ answerText: 'Mobile Developer', isCorrect: false },
			],
		},
		{
			questionText: 'The two main types of routers include unmanaged and managed routers',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following provide security and flexibility that is custom-fit to the network desired',
			answerOptions: [
				{ answerText: 'Managed Switches', isCorrect: false },
				{ answerText: 'Wireless Routers', isCorrect: false },
				{ answerText: 'Wired Router', isCorrect: true },
				{ answerText: 'Unmanaged Switches', isCorrect: false },
			],
		},
		{
			questionText: 'Data sent through the internet, such as a web page or email, is in the form of data packets',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
	],
    questionList3: [
		{
			questionText: 'Which of the following uses network security software to protect systems and data', 
            answerOptions: [
				{ answerText: 'Web Designer', isCorrect: false },
				{ answerText: 'Network Security Engineer', isCorrect: true },
				{ answerText: 'Hardware Engineer', isCorrect: false },
				{ answerText: 'Data Scientist', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is an example of the things that network security software protects against',
			answerOptions: [
				{ answerText: 'Virus', isCorrect: false },
				{ answerText: 'Troyan', isCorrect: false },
				{ answerText: 'Worms', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following is an example of a network security software used to protect data and systems',
			answerOptions: [
				{ answerText: 'Firewall', isCorrect: false },
				{ answerText: 'VPN', isCorrect: false },
				{ answerText: 'Cloud Networks', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following controls incoming and outgoing network traffic using predetermined rules',
			answerOptions: [
				{ answerText: 'Antivirus', isCorrect: false },
				{ answerText: 'Firewall', isCorrect: true },
				{ answerText: 'VPN', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
	]
};

function InfraSysQuiz({ questionList }) {
    

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

export default InfraSysQuiz;