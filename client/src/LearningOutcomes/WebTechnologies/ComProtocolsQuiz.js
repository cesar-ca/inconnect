import { useEffect, useState } from "react";
import { QuizCallToAction } from "../../SectionTitleLeft";
import { Link } from "react-router-dom";

import Api from "../../Api";

import {useAuthContext} from '../../AuthContext';

function ComProtocolsQuiz() {
    const questions = [
		{
			questionText: 'Network protocols determine how data is transmitted between different devices in the same network and it is a skilled mostly used by', 
            answerOptions: [
				{ answerText: 'hardware engineer', isCorrect: false },
				{ answerText: 'Data Scientist', isCorrect: false },
				{ answerText: 'Network Protocols Engineer', isCorrect: true },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'These are common functions of security network protocols',
			answerOptions: [
				{ answerText: 'Encryption', isCorrect: false },
				{ answerText: 'Entity Authentication', isCorrect: false },
				{ answerText: 'Transportation', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'These are a few example of most commonly used network protocols',
			answerOptions: [
				{ answerText: 'HTTP', isCorrect: false },
				{ answerText: 'SSH', isCorrect: false },
				{ answerText: 'SMS', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'Security protocols, also called cryptographic protocols, work to ensure that the network and the data sent over it are protected from unauthorized users',
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
		</div>
		<div className="col-md-6">
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

export default ComProtocolsQuiz;