import PropTypes from 'prop-types';
import style from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <>
      <p className={style.notificationMsg}>{message}</p>
    </>
  );
};

Notification.prototyps = {
  good: PropTypes.string.isRequired,
};
