import { useEffect, useState } from "react";
import { QuizCallToAction } from "../../SectionTitleLeft";
import { Link } from "react-router-dom";

import Api from "../../Api";

import {useAuthContext} from '../../AuthContext';

function JavaScriptHTMLCSSQuiz() {
    const questions = [
		{
			questionText: 'Knowing how to use JavaScript, HTML, CSS is a skill required mainly by', 
            answerOptions: [
				{ answerText: 'hardware engineer', isCorrect: false },
				{ answerText: 'Data Scientist', isCorrect: false },
				{ answerText: 'web developer', isCorrect: true },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'CSS is a logic-based programming language that can be used to modify the content of a website and cause it to behave in different ways in response to user actions',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
		{
			questionText: 'Using CSS, you can control the',
			answerOptions: [
				{ answerText: 'Color of the text', isCorrect: false },
				{ answerText: 'Style of fonts', isCorrect: false },
				{ answerText: 'background pictures', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'HTML is made up of the following characteristics',
			answerOptions: [
				{ answerText: 'Labels', isCorrect: false },
				{ answerText: 'attributes', isCorrect: false },
				{ answerText: 'Elements', isCorrect: false },
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

export default JavaScriptHTMLCSSQuiz;