import { useState } from 'react'
import Question from './Question'

const TellUsMore = (questions) => {
  const [timeOut, setTimeOut] = useState(null)

  const handleSubmit = (e) => {
    setTimeOut(1);
    console.log(timeOut);
  };
  
  setTimeout(() => {
    setTimeOut(1)
  }, 3000)

  return (
    //   timeOut === 1 && 
    questions && <div>
      <div>Tell Us More!</div>
      <form onSubmit={handleSubmit}>
        {
          questions.length > 0 && questions.forEach(question => <Question key={question.id} question={question} />)
        }

        {/* {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
          />
        ))} */}
      </form>
    </div>
  )
}

export default TellUsMore
