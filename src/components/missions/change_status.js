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
      className="flex px-8 md:px-2 justify-center items-center text-xs md:text-md lg:text-xl"
    >
      <button
        type="button"
        onClick={handleChange}
        className="bg-white text-grayDark px-1 py-1 rounded border text-center"
      >
        {
          text === 'Join Mission' ? (
            <span className="text-center text-blue">
              {text}
            </span>
          ) : (
            <span className="bg-transparent text-red text-center">
              {text}
            </span>
          )
        }
      </button>
    </div>
  );
};

ChangeStatus.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default ChangeStatus;
