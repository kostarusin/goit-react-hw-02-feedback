import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import style from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <ul className={style.list}>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {total}</p>
          </li>
          <li>
            <p>Positive feedback: {positivePercentage}%</p>
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

Statistics.prototyps = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
