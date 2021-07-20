import MovingComponent from 'react-moving-text'

const HelpImprove = ({onMouseOver, onMouseOut, onClick}) => {
  return (
    <MovingComponent
      className="help-improve"
      // onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOut}
      onClick={onClick}
      type="fadeInFromLeft"
      duration="500ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none">
        <div className="help-improve-text">
          Help us improve
        </div>
    </MovingComponent>

    // <div
    //   className="help-improve"
    //   onMouseOver={onMouseOver}
    //   onMouseOut={onMouseOut}
    //   onClick={onClick}
    // >
    //   Help us improve
    // </div>
  )
}

export default HelpImprove
