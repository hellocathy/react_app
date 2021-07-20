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

  const smileyOnMouseOver = () => {
    setShowHelpImprove(!showHelpImprove);
    setShowSmiley(!showSmiley);
  }

  const helpImproveOnMouseOut = () => {
    setShowHelpImprove(!showHelpImprove);
    setShowSmiley(!showSmiley);
  }

  const helpImproveOnClick = () => {
    setShowRateExperience(!showRateExperience);
    setShowSmiley(!showSmiley);
  }

  const rateExperienceOnClose = () => {
    setShowRateExperience(!showRateExperience);
  }

  const rateExperienceOnClick = () => {
    setShowQuestions(!showQuestions);
  }

  const questionsSubmitted = () => {
    setShowQuestions(!showQuestions);
    setShowThankYou(!showThankYou);
  }

  const questionsOnClose = () => {
    setShowQuestions(!showQuestions);
  }

  return (
    <div className="container">
      {
        showSmiley && <Smiley onMouseOver={smileyOnMouseOver} />
      }
      
      {
        showHelpImprove && <HelpImprove
          onMouseOut={helpImproveOnMouseOut}
          onClick={helpImproveOnClick}
        />
      }
      
      {
        showRateExperience && <RateExperience
          onClose={rateExperienceOnClose}
          setRateId={setRateId}
          setShowQuestions={rateExperienceOnClick}
        />
      }
      
      {
        showQuestions && <Questions
          rateId={rateId}
          onSubmit={questionsSubmitted}
          onClose={questionsOnClose}
        />
      }

      { showThankYou && <ThankYou /> }
    </div>
  );
}

export default App;
