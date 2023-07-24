import PropTypes from 'prop-types';

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
   

      return (
      <div className="buttonWrap">
        {options.map(option => {return <button
          key={option}
          type="button"
          name={option}
          className="button"
          onClick={onLeaveFeedback}
        >{option}</button>})}
      </div>
    );
  }

  FeedbackOptions.prototyps = {
    onLeaveFeedback: PropTypes.func.isRequired, 
    options: PropTypes.objectOf(
      PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
         })
    ).isRequired,
  }


