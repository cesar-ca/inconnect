import { useEffect, useState } from "react";
import { QuizCallToAction } from "../../SectionTitleLeft";
import { Link } from "react-router-dom";

import Api from "../../Api";

import {useAuthContext} from '../../AuthContext';

function WebDevQuiz() {
    const questions = [
		{
			questionText: 
            'Web development includes creating, testing, and implementing web applications using web technologies and it is a skill mainly used by:', 
            answerOptions: [
				{ answerText: 'Hardware engineer', isCorrect: false },
				{ answerText: 'Data Scientist', isCorrect: false },
				{ answerText: 'Web developer', isCorrect: true },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'These are different types of web development',
			answerOptions: [
				{ answerText: 'Front-end web development', isCorrect: false },
				{ answerText: 'Back-end web development', isCorrect: false },
				{ answerText: 'Full-stack web development', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'Back-end developers focus on creating visually pleasing and easy-to-use applications',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'Full-stack developers use both front-end and back-end technologies',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    return (

        <main className="myContainer">
        <div className="row">
          <div className="col-md-12" >

            <p className="text-center" ></p>
            {/* <img src={logo} className="logo" alt="FairPlay Logo"></img> */}
          </div>
          <div className="col-md-6" >
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
                                You scored {score} out of {questions.length}
                            </div></>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
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

export default WebDevQuiz;