import { useState } from 'react'
import Smiley from './components/Smiley'
import HelpImprove from './components/HelpImprove'
import RateExperience from './components/RateExperience'
import ThankYou from './components/ThankYou'
import TellUsMore from './components/TellUsMore'

function App() {
  const [showHelpImprove, setShowHelpImprove] = useState(false)
  const [showRateExperience, setShowRateExperience] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [showTellUsMore, setShowTellUsMore] = useState(false)
  // const [questions, setQuestions] = useState(null)

  var rating;
  var questions;

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

  const getQuestions = () => {
    fetch("http://localhost:3001/v1/questions", {
      "method": "GET",
      "headers": {
        "Authorization": "Bearer 81ye7ye17s713871236312s61836s12732112839",
        "content-type": "application/json",
        "accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => questions = data)
    .then(response => {
      console.table(questions);
      setShowTellUsMore(true);
    })
    .catch(err => {
      console.log(err);
    });
  }

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
    .then(data => rating = data)
    .then(response => {
      console.table(rating)
      setShowRateExperience(false);
      setShowThankYou(true);
      getQuestions();
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div className="container">
      {
        !showHelpImprove && <Smiley
          onMouseOver={() => setShowHelpImprove(true)}
          onMouseOut={() => setShowHelpImprove(false)}
        />
      }
      
      {
        showHelpImprove && <HelpImprove
          onMouseOver={() => setShowHelpImprove(true)}
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
        showThankYou && <ThankYou />
      }

      {
        showThankYou && showTellUsMore && <TellUsMore questions={questions} />
      }
    </div>
  );
}

export default App;
