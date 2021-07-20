import LinearScale from "./LinearScale"

const Question = ({question, onChange}) => {
  return (
    <div>
      <div className="question-text">
        <h4>{question.text}</h4>
      </div>

      {(() => {
        switch (question.question_type) {
          case 'short_answer':
            return (
              <textarea
                className="question-textarea"
                type="text"
                id={question.id}
                placeholder={question.placeholder}
                required={question.required}
                onChange={onChange}
                rows="3" />
            )
          case 'email':
            return (
              <input
                className="question-input"
                type="text"
                id={question.id}
                placeholder={question.placeholder}
                required={question.required}
                onChange={onChange}  />
            )
          case 'linear_scale':
            return (
              <LinearScale question={question} onChange={onChange} />
            )
          default:
        }
        })()}
    </div>
  )
}

export default Question
