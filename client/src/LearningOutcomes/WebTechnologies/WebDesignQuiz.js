import { useEffect, useState } from "react";
import { QuizCallToAction } from "../../SectionTitleLeft";
import { Link } from "react-router-dom";

import Api from "../../Api";

import {useAuthContext} from '../../AuthContext';

function WebDesignQuiz() {
    const questions = [
		{
			questionText: 'The elements of web design are mainly used by', 
            answerOptions: [
				{ answerText: 'Web Designer', isCorrect: true },
				{ answerText: 'Data Scientist', isCorrect: false },
				{ answerText: 'Hardware Engineer', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'These are types of web designs',
			answerOptions: [
				{ answerText: 'Responsive design', isCorrect: true },
				{ answerText: 'relational web design', isCorrect: false },
				{ answerText: 'Integrated web design', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'A responsive web design changes its layout and display of information depending on the browser size',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
		{
			questionText: 'These are elements of web design',
			answerOptions: [
				{ answerText: 'Sources', isCorrect: false },
				{ answerText: 'Colors', isCorrect: false },
				{ answerText: 'Shapes', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
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

export default WebDesignQuiz;