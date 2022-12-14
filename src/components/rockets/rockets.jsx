import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import background from '../../assets/for_press_release.png';
import arrowDown from '../../assets/iconmonstr-arrow-down-circle-lined.svg';
import GetRockets from './rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const ref = useRef(null);
  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className="container-fluid w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-white text-center uppercase">
            Space
            {' '}
            <br />
            {' '}
            traveler&apos;s
          </h1>
          <p className="text-grayLight mt-2 md:text-xl md:uppercase font-light text-center md:tracking-widest">Explore the Space Together</p>
          <button type="button" onClick={handleClick}>
            <img src={arrowDown} alt="arrow down" className="w-12 h-12 animate-bounce mt-12" />
          </button>
        </div>
      </div>
      <section ref={ref} className="px-2 md:px-16 lg:px-32 pt-16 md:pt-24">
        <ul className="w-full">
          {rockets.map((rocket) => (
            <GetRockets
              key={rocket.id}
              id={rocket.id}
              images={rocket.flickr_images[0]}
              name={rocket.rocket_name}
              description={rocket.description}
              reserved={rocket.reserved}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Rockets;
