import smiley from '../smiley.png'

const Smiley = ({onMouseOver}) => {
  return (
    <img
      src={smiley}
      alt="Smiley"
      className="smiley"
      onMouseOver={onMouseOver} />
  )
}
export default Smiley
