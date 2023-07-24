import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <>
      <p className='notificationMsg'>{message}</p>
    </>
  );
};

Notification.prototyps = {
  good: PropTypes.string.isRequired,
};
