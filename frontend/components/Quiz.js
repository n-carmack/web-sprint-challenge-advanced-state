import React from 'react'

import { connect } from 'react-redux';

import { selectAnswer, setQuiz, fetchQuiz, postAnswer, postQuiz } from '../state/action-creators';

function Quiz(props) {
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
//quiz and answer
  }
}

export default connect(mapStateToProps, {selectAnswer, setQuiz, fetchQuiz, postAnswer, postQuiz})(Quiz)