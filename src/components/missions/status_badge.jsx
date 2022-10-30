import PropTypes from 'prop-types';
import React from 'react';

const StatusBadge = (props) => {
  const { text } = props;
  return (
    <div
      className="flex p-8 md:px-2 justify-center items-center text-xs md:text-md lg:text-xl border-r"
    >
      {
        text === 'Active Member' ? (
          <span className="bg-blue text-white px-1 py-1 rounded text-center">
            {text}
          </span>
        ) : (
          <span className="bg-transparent px-1 py-1 rounded border text-center">
            {text}
          </span>
        )
      }
    </div>
  );
};

StatusBadge.propTypes = {
  text: PropTypes.string.isRequired,
};
export default StatusBadge;
