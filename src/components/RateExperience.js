import { FaTimes } from 'react-icons/fa'

const RateExperience = ({onClose, setRateId, setShowQuestions}) => {

  var rating = null;

  const sendRating = (e) => {
    fetch("http://localhost:3001/v1/ratings", {
      "method": "POST",
      "headers": {
        "Authorization": "Bearer 81ye7ye17s713871236312s61836s12732112839",
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        rate: e.target.textContent
      })
    })
    .then(response => response.json())
    .then(data => rating = data.id)
    .then(response => {
      console.log(rating);
      setRateId(rating);
      onClose();
      setShowQuestions(true);
    })
    .catch(err => {
      onClose();
    });
  }

  return (
    <div className="rate-experience">
      <div className="rate-experience-close">
        <FaTimes
          style={{ color: 'gray', cursor: 'pointer' }}
          onClick={onClose}
        />
      </div>

      <div className="rate-experience-title">Rate your experience</div>

      <div className="rate-experience-scores-container">
        <div className="rate-experience-scores">
          <div
            className="rate-experience-score-start rate-experience-score"
            onClick={sendRating}>
            1
          </div>
          <div className="rate-experience-score" onClick={sendRating}>2</div>
          <div className="rate-experience-score" onClick={sendRating}>3</div>
          <div className="rate-experience-score" onClick={sendRating}>4</div>
          <div className="rate-experience-score" onClick={sendRating}>5</div>
          <div
            className="rate-experience-score-end rate-experience-score"
            onClick={sendRating}>
            6
          </div>
        </div>

        <div className="rate-experience-caption">
          <p className="rate-experience-caption-not-satisfied">
            NOT SATISFIED
          </p>
          <p className="rate-experience-caption-satisfied">
            SATISFIED
          </p>
        </div>
      </div>
    </div>
  )
}

export default RateExperience
