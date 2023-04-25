import React from 'react'
import { useEffect } from 'react';

import { connect } from 'react-redux';

import { selectAnswer, setQuiz, fetchQuiz, postAnswer, postQuiz } from '../state/action-creators';

function Quiz(props) {

  useEffect( () => {
    props.fetchQuiz()
  }, []);

  const handleQuizSubmit = (e) => {
    e.preventDefault()
    props.postAnswer({ "quiz_id": props.quiz.quiz_id, "answer_id": props.selectedAnswer.answer_id})
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${props.selectedAnswer === props.quiz.answers[0] ? 'selected':''}`}>
                {props.quiz.answers[0].text}
                <button onClick={()=>{props.selectAnswer(props.quiz.answers[0])}}>
                  {props.selectedAnswer===props.quiz.answers[0] ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer ${props.selectedAnswer===props.quiz.answers[1] ? 'selected':''}`}>
                {props.quiz.answers[1].text}
                <button onClick={()=>{props.selectAnswer(props.quiz.answers[1])}}>
                {props.selectedAnswer===props.quiz.answers[1] ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={!props.selectedAnswer} onClick={handleQuizSubmit} >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
//quiz and answer
    quiz : state.quiz,
    selectedAnswer : state.selectedAnswer
  }
}

export default connect(mapStateToProps, {selectAnswer, setQuiz, fetchQuiz, postAnswer, postQuiz})(Quiz)