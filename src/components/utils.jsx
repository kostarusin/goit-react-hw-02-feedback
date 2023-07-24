import PropTypes from 'prop-types';

export const countTotalFeedback = options => {
  const { good, neutral, bad } = options;
  const total = good + neutral + bad;
  return total;
};

export const countPositiveFeedbackPercentage = options => {
  const { good } = options;
  const total = countTotalFeedback(options);
  return total === 0 ? 0 : Math.round((good / total) * 100);
};


countTotalFeedback.prototyps = {
        options: PropTypes.objectOf(
      PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
         })
    ).isRequired,
  }


