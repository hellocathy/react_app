import { useState } from 'react'
import Smiley from './components/Smiley'
import HelpImprove from './components/HelpImprove'
import RateExperience from './components/RateExperience'
import Questions from './components/Questions'
import ThankYou from './components/ThankYou'

function App() {
  const [showSmiley, setShowSmiley] = useState(true)
  const [showHelpImprove, setShowHelpImprove] = useState(false)
  const [showRateExperience, setShowRateExperience] = useState(false)
  const [showQuestions, setShowQuestions] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [rateId, setRateId] = useState(null)

  // const [showQuestions, setShowQuestions] = useState(false)
  // const [questions, setQuestions] = useState(null)

  var rating = null;
  // var questions;

  // const getQuestions = async () => {
  //   const response = await fetch("http://localhost:3001/v1/questions", {
  //     "method": "GET",
  //     "headers": {
  //       "Authorization": "Bearer 81ye7ye17s713871236312s61836s12732112839",
  //       "content-type": "application/json",
  //       "accept": "application/json"
  //     }
  //   });

  //   setQuestions(response.data) 
  // }

  // const getQuestions = () => {
  //   fetch("http://localhost:3001/v1/questions", {
  //     "method": "GET",
  //     "headers": {
  //       "Authorization": "Bearer 81ye7ye17s713871236312s61836s12732112839",
  //       "content-type": "application/json",
  //       "accept": "application/json"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => questions = data.questions)
  //   .then(response => {
  //     console.table(questions);
  //     // setShowQuestions(true);
  //     // debugger;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

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
      setShowRateExperience(false);
      setShowQuestions(true);
      setShowSmiley(false);
      // getQuestions();
    })
    .catch(err => {
      console.log(err);
    });
  }

  const handleFormSubmitted = () => {
    setShowThankYou(true);
  };

  return (
    <div className="container">
      {
        // !showHelpImprove && !showRateExperience && !showQuestions && <Smiley
        showSmiley && <Smiley
          onMouseOver={() => setShowHelpImprove(true)}
          // onMouseOut={() => setShowHelpImprove(true)}
        />
      }
      
      {
        showHelpImprove && <HelpImprove
          // onMouseOver={() => setShowHelpImprove(true)}
          onMouseOut={() => setShowHelpImprove(false)}
          onClick={() => setShowRateExperience(true)}
        />
      }
      
      {
        showRateExperience && <RateExperience
          onClose={() => setShowRateExperience(false)}
          onClick={sendRating}
        />
      }

      {
        showQuestions && rateId != null && <Questions
          rateId={rateId}
          onFormSubmitted={handleFormSubmitted}
          onClose={() => setShowQuestions(false)}
        />
      }

      {/* { showThankYou && <div>Show TY</div> }
      { !showThankYou && <div>NO Show TY</div> } */}
      {/* { !showHelpImprove && !showRateExperience && !showQuestions && <ThankYou /> } */}
    </div>
  );
}

export default App;
