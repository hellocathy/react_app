import MovingComponent from 'react-moving-text'

const HelpImprove = ({onMouseOver, onMouseOut, onClick}) => {
  return (
    <MovingComponent
      className="help-improve"
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
  )
}

export default HelpImprove
