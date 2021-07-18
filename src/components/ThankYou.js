import { useState } from 'react'

const ThankYou = () => {
  const [timeOut, setTimeOut] = useState(null)
  
  setTimeout(() => {
    setTimeOut(1)
  }, 3000)

  return (
    timeOut !== 1 && <div className="thank-you">
      <span>Thank you! Tell us more.</span>
    </div>
  )
}

export default ThankYou
