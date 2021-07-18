const Question = (question) => {
  return (
    <div className="question">
      <label>{question.text}</label>
      <input
        type="text"
        value={this.state.value}
        placeholder={question.placeholder} />
    </div>
  )
}

export default Question
