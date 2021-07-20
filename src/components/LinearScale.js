const LinearScale = ({question, onChange}) => {
  return (
    <div className="linear-scale-container">
      <div
        className="rate-experience-score-start rate-experience-score"
      >
        1<br/>
        <input type="radio" name={question.id} value="1" />
      </div>
      <div className="rate-experience-score">
        2<br/><input type="radio" name={question.id} value="2" />
      </div>
      <div className="rate-experience-score">
        3<br/><input type="radio" name={question.id} value="3" />
      </div>
      <div className="rate-experience-score">
        4<br/><input type="radio" name={question.id} value="4" />
      </div>
      <div className="rate-experience-score-end rate-experience-score">
        5<br/><input type="radio" name={question.id} value="5" />
      </div>
    </div>
  )
}

export default LinearScale
