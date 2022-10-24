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
          {' '}
          <StatusBadge text="Active Member" className="bg-blue text-white" />
          {' '}
          <ChangeStatus
            text="Leave Mission"
            id={id}
            className="text-red"
          />
          {' '}
        </>
      ) : (
        <>
          {' '}
          <StatusBadge text="Not a Member" />
          {' '}
          <ChangeStatus
            text="Join Mission"
            color="rgba(0,0,0,.7)"
            id={id}
          />
          {' '}
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
