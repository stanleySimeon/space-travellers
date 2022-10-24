import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMissionStats } from '../../redux/missions/missions';

const ChangeStatus = (props) => {
  const { id, text } = props;
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(changeMissionStats(id));
  };

  return (
    <div
      className="flex px-8 md:px-2 justify-center items-center text-xs md:text-md lg:text-xl border-r"
    >
      <button
        type="button"
        onClick={handleChange}
        className="border bg-white shadow-none cursor-pointer p-1 md:p-2 rounded-sm"
      >
        {text}
      </button>
    </div>
  );
};

ChangeStatus.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default ChangeStatus;
