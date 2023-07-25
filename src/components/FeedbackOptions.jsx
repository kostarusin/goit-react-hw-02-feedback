import PropTypes from 'prop-types';

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
   

      return (
      <ul className="buttonWrap">
        {options.map(option => {return <li
          
        >
          <button key={option}
          type="button"
          name={option}
          className="button"
          onClick={onLeaveFeedback}>{option}</button></li>})}
      </ul>
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


