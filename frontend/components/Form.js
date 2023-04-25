import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { resetForm } from '../state/action-creators'

export function Form(props) {

  const emptyFormState = {
    newQuestion: '',
    newTrueAnswer: '',
    newFalseAnswer: ''
  }

  const initialFormState = {
    newQuestion: props.form.newQuestion ? localStorage.getItem('newQuestion'):'',
    newTrueAnswer: props.form.newTrueAnswer ? localStorage.getItem('newTrueAnswer'):'',
    newFalseAnswer: props.form.newTrueAnswer ? localStorage.getItem('newFalseAnswer'):''
  }

  const [formState, setFormState] = useState(initialFormState)

  const onChange = evt => {
    setFormState({...formState, [evt.target.id] : evt.target.value})
    localStorage.setItem([evt.target.id], evt.target.value)
    props.inputChange(formState)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz({ "question_text": formState.newQuestion, "true_answer_text": formState.newTrueAnswer, "false_answer_text" : formState.newFalseAnswer})
    localStorage.clear()
    setFormState(emptyFormState)
  }


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={formState.newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={formState.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={formState.newFalseAnswer}/>
      <button id="submitNewQuizBtn" disabled={!(formState.newQuestion.trim().length >1 && formState.newTrueAnswer.trim().length >1 && formState.newFalseAnswer.trim().length >1)}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
