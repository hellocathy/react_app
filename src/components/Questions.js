import { useEffect, useState } from "react"
import { FaTimes } from 'react-icons/fa'
import smiley from '../smiley.png'
import Question from "./Question"

const Questions = ({rateId, onFormSubmitted, onClose}) => {
  const [questions, setQuestions] = useState([])
  const [responses, setResponses] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const onInputChange = (e) => {
    // console.log('delete', id)
    console.log(e.target.id)
    console.log(e.target.value)
    var result;

    if (Object.keys(responses).length === 0){
      result = questions.reduce(function(map, obj) {
        map[obj.id] = "";
        return map;
      }, {});

      result[e.target.id] = e.target.value;
      setResponses(result);
    } else {
      responses[e.target.id] = e.target.value;
      setResponses(responses);
    }

    // result[e.target.id] = e.target.value;
    // setResponses(result);

    console.log("------");
    console.log(responses);
    console.log("------");

    // Object.keys(responses).length == 0
    // setResponses(questions.filter((question) => question.id !== id))
  }

  const sendResponses = (e) => {
    fetch("http://localhost:3001/v1/responses", {
      "method": "POST",
      "headers": {
        "Authorization": "Bearer 81ye7ye17s713871236312s61836s12732112839",
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        rating_id: rateId,
        responses: responses
      })
    })
    .then(response => response.json())
    .then(data => setSubmitted(true))
    .then(data => {
      console.log(submitted);
    })
    .catch(err => {
      console.log(err);
    });
  }

  // useEffect(function sendResponses() {
  //   fetch("http://localhost:3001/v1/responses", {
  //     "method": "POST",
  //     "headers": {
  //       "Authorization": "Bearer 81ye7ye17s713871236312s61836s12732112839",
  //       "content-type": "application/json",
  //       "accept": "application/json"
  //     },
  //     "body": JSON.stringify({
  //       rating_id: rateId,
  //       responses: responses
  //     })
  //   })
  //   .then(resp => resp.json())
  //   .then(data => setSubmitted(true))
  // });

  useEffect(() => {
    fetch("http://localhost:3001/v1/questions", {
      "method": "GET",
      "headers": {
        "Authorization": "Bearer 81ye7ye17s713871236312s61836s12732112839",
        "content-type": "application/json",
        "accept": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => setQuestions(data.questions))
    .then(data => {
      // var result = questions.reduce(function(map, obj) {
      //   map[obj.id] = "";
      //   return map;
      // }, {});
  
      // setResponses(result);
      // debugger;
      // console.log(responses);
    })
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
        
        <form>
          {
            questions.map((question) => (
              <Question key={question.id} question={question} onChange={onInputChange} />
            ))
          }
          <input className="btn" type="submit" value="SUBMIT" onClick={() => { sendResponses(); onFormSubmitted();}} />
        </form>
      </div>
    </div>

    // <div className="questions-container">
    //   <div className="questions-close">
    //     <FaTimes
    //       className="questions-close"
    //       style={{ color: 'gray', cursor: 'pointer' }}
    //       onClick={props.onClick}
    //     />
    //   </div>
    //   <div className="questions-title"><h3>Tell Us More!</h3></div>
    //   <form>
    //     {
    //       questions.map((question) => (
    //         <Question key={question.id} question={question} />
    //       ))
    //     }
    //     <input className="btn" type="submit" value="SUBMIT" />
    //   </form>
    // </div>
  )
}

export default Questions
