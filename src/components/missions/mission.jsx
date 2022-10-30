import PropTypes from 'prop-types';
import React from 'react';
import ChangeStatus from './change_status';
import styles from './mission.module.css';
import StatusBadge from './status_badge';

const Mission = (props) => {
  const {
    id, name, description, reserved, bgColor,
  } = props;

  return (
    <div className={`text-xs ${styles.mission}`} style={{ backgroundColor: bgColor }}>
      <p className={styles.right_border}>{name}</p>
      <p className={styles.right_border}>
        {' '}
        {description}
      </p>
      {reserved ? (
        <>
          <StatusBadge text="Active Member" />
          <ChangeStatus text="Leave Mission" id={id} />
        </>
      ) : (
        <>
          <StatusBadge text="Not a Member" />
          <ChangeStatus text="Join Mission" id={id} />
        </>
      )}
    </div>
  );
};

Mission.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
