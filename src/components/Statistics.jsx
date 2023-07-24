import PropTypes from 'prop-types';
import { Notification } from './Notification';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
return(<>
        {good !== 0 || neutral !== 0 || bad !== 0 ? (
            <div className="statistics" key={6}>
              <p>Good: {good}</p>
              <p>Neutral: {neutral}</p>
              <p>Bad: {bad}</p>
              <p>Total: {total}</p>
              <p>Positive feedback: {positivePercentage}%</p>
            </div>
          ) : (<Notification message="There is no feedback" />) }
        
    </>)
  
};

Statistics.prototyps = {
    good: PropTypes.string.isRequired, 
    neutral: PropTypes.string.isRequired, 
    bad: PropTypes.string.isRequired, 
    total: PropTypes.number.isRequired, 
    positivePercentage: PropTypes.number.isRequired, 
   }



 