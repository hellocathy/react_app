const HelpImprove = ({onMouseOut, onClick}) => {
  return (
    <div className="help-improve"
    onMouseLeave={onMouseOut}
    onClick={onClick}>
      <div className="help-improve-text">
        Help us improve
      </div>
    </div>
  )
}

export default HelpImprove
