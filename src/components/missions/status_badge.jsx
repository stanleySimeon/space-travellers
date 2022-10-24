import PropTypes from 'prop-types';
import React from 'react';

const StatusBadge = (props) => {
  const { text } = props;
  return (
    <div
      className="flex p-8 md:px-2 justify-center items-center text-xs md:text-md lg:text-xl border-r"
    >
      <p
        className="p-1 md:p-2 lg:p-3 rounded-sm text-white bg-gray"
      >
        {text}
      </p>
    </div>
  );
};

StatusBadge.propTypes = {
  text: PropTypes.string.isRequired,
};
export default StatusBadge;
