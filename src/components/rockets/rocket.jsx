import React from 'react';
import PropTypes from 'prop-types';
import RocketBadge from './rocketsBadge';

const badgeStyle = {
  background: '#00B2CE',
  color: '#ffffff',
};

const GetRockets = ({
  id, images, name, description, reserved,
}) => (
  <li
    className="card m-auto shadow-md rounded-md p-2 md:mt-10 md:flex gap-5 mb-6"
  >
    <img alt={name} src={images} className="w-full md:w-4/12 lg:w-5/12" />
    <div>
      <h2 className="font-bold text-md md:text-xl lg:text-2xl md:mb-2 my-2">{name}</h2>
      <div className="p-0 text-sm md:text-xl">
        {reserved ? (
          <div className="m-0 p-0 text-md">
            <p>
              <span
                style={badgeStyle}
                className="p-1 rounded-sm md:rounded-md md:font-normal m-0"
              >
                reserved
              </span>
              {' '}
              <span className="text-grayDark text-sm md:text-xl mb-4">{description}</span>
              {' '}
            </p>
          </div>
        ) : (
          <p className="text-grayDark text-sm md:text-xl mb-4">{description}</p>
        )}
      </div>
      <RocketBadge id={id} reserved={reserved} />
    </div>
  </li>
);

GetRockets.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default GetRockets;
