import { useEffect, useState } from "react"
import { FaTimes } from 'react-icons/fa'
import smiley from '../smiley.png'
import Question from "./Question"

const Questions = ({rateId, onSubmit, onClose}) => {
  const [questions, setQuestions] = useState([])
  const [responses, setResponses] = useState([])
  const [disableButton, setDisableButton] = useState(true)

  const onFormSubmission = (e) => {
    e.preventDefault();
    onSubmit();
  }

  const onInputChange = (e) => {
    var result;

    if (Object.keys(responses).length === 0){
      result = questions.reduce(function(map, obj) {
        map[obj.id] = "";
        return map;
      }, {});

      result[e.target.id || e.target.name] = e.target.value;
      setResponses(result);
    } else {
      responses[e.target.id || e.target.name] = e.target.value;
      setResponses(responses);
    }

    var values = Object.values(result || responses);
    setDisableButton(values.every(element => element === ""));
  }

  const sendResponses = (e) => {
    fetch("http://localhost:3001/v1/responses", {
      "method": "POST",
      "headers": {
        "Authorization": "Bearer " + process.env.REACT_APP_API_TOKEN,
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        rating_id: rateId,
        responses: responses
      })
    })
    .then(response => response.json())
    .then(data => {
    })
    .catch(err => {
      onClose();
      console.log(err);
    });
  }

  useEffect(() => {
    fetch("http://localhost:3001/v1/questions", {
      "method": "GET",
      "headers": {
        "Authorization": "Bearer " + process.env.REACT_APP_API_TOKEN,
        "content-type": "application/json",
        "accept": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => setQuestions(data.questions))
  }, [])

  return (
    <div>
      <div className="thank-you">
        <img
          className="thank-you-smiley"
          src={smiley}
          alt="Smiley"
        />
        <h3>Thank you! Tell us more.</h3>
      </div>

      <div className="questions-container">
        <div className="questions-header">
          <div className="questions-close">
            <FaTimes
              className="questions-close"
              style={{ color: 'gray', cursor: 'pointer' }}
              onClick={onClose}
            />
          </div>
          <div className="questions-title">
            <h3>Tell us more</h3>
          </div>
        </div>
        
        <form className="questions-form" onSubmit={onFormSubmission}>
          {
            questions.map((question) => (
              <Question
                key={question.id}
                question={question}
                onChange={onInputChange} />
            ))
          }
          <input
            className="btn"
            type="submit"
            value="SUBMIT"
            disabled={disableButton}
            onClick={sendResponses} />
        </form>
      </div>
    </div>
  )
}

export default Questions
