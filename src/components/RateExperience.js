import { FaTimes } from 'react-icons/fa'

const RateExperience = ({onClose, onClick}) => {
  return (
    <div className="rate-experience">
      <div className="rate-experience-close">
        <FaTimes
          style={{ color: 'gray', cursor: 'pointer' }}
          onClick={onClose}
        />
      </div>

      <div className="rate-experience-title">Rate your experience</div>

      <div className="rate-experience-scores-container">
        <div className="rate-experience-scores">
          <div
            className="rate-experience-score-start rate-experience-score"
            onClick={onClick}
          >
            1
          </div>
          <div className="rate-experience-score" onClick={onClick}>2</div>
          <div className="rate-experience-score" onClick={onClick}>3</div>
          <div className="rate-experience-score" onClick={onClick}>4</div>
          <div className="rate-experience-score" onClick={onClick}>5</div>
          <div
            className="rate-experience-score-end rate-experience-score"
            onClick={onClick}
          >
            6
          </div>
        </div>

        <div className="rate-experience-caption">
          <p className="rate-experience-caption-not-satisfied">
            NOT SATISFIED
          </p>
          <p className="rate-experience-caption-satisfied">
            SATISFIED
          </p>
        </div>
      </div>
      </div>


    // <MovingComponent
    //   className="rate-experience"
    //   type="fadeInFromLeft"
    //   duration="500ms"
    //   delay="0s"
    //   direction="normal"
    //   timing="ease"
    //   iteration="1"
    //   fillMode="none">
    //   <div className="rate-experience-close">
    //     <FaTimes
    //       style={{ color: 'gray', cursor: 'pointer' }}
    //       onClick={onClose}
    //     />
    //   </div>

    //   <div className="rate-experience-title">Rate your experience</div>

    //   <div className="rate-experience-scores-container">
    //     <div className="rate-experience-scores">
    //       <div
    //         className="rate-experience-score-start rate-experience-score"
    //         onClick={onClick}
    //       >
    //         1
    //       </div>
    //       <div className="rate-experience-score" onClick={onClick}>2</div>
    //       <div className="rate-experience-score" onClick={onClick}>3</div>
    //       <div className="rate-experience-score" onClick={onClick}>4</div>
    //       <div className="rate-experience-score" onClick={onClick}>5</div>
    //       <div
    //         className="rate-experience-score-end rate-experience-score"
    //         onClick={onClick}
    //       >
    //         6
    //       </div>
    //     </div>

    //     <div className="rate-experience-caption">
    //       <p className="rate-experience-caption-not-satisfied">
    //         NOT SATISFIED
    //       </p>
    //       <p className="rate-experience-caption-satisfied">
    //         SATISFIED
    //       </p>
    //     </div>
    //   </div>
    // </MovingComponent>

    // <div className="rate-experience">
    // <div className="rate-experience-close">
    //   <FaTimes
    //     style={{ color: 'gray', cursor: 'pointer' }}
    //     onClick={onClose}
    //   />
    // </div>

    // <div className="rate-experience-title">Rate your experience</div>

    // <div className="rate-experience-scores-container">
    //   <div className="rate-experience-scores">
    //     <div
    //       className="rate-experience-score-start rate-experience-score"
    //       onClick={onClick}
    //     >
    //       1
    //     </div>
    //     <div className="rate-experience-score" onClick={onClick}>2</div>
    //     <div className="rate-experience-score" onClick={onClick}>3</div>
    //     <div className="rate-experience-score" onClick={onClick}>4</div>
    //     <div className="rate-experience-score" onClick={onClick}>5</div>
    //     <div
    //       className="rate-experience-score-end rate-experience-score"
    //       onClick={onClick}
    //     >
    //       6
    //     </div>
    //   </div>

    //   <div className="rate-experience-caption">
    //     <p className="rate-experience-caption-not-satisfied">
    //       NOT SATISFIED
    //     </p>
    //     <p className="rate-experience-caption-satisfied">
    //       SATISFIED
    //     </p>
    //   </div>
    // </div>
    // </div>
  )
}

export default RateExperience
