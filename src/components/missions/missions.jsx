import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMissionsAsync } from '../../redux/missions/missions';
import Mission from './mission';
import styles from './mission.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadMissionsAsync);
  }, []);
  let i = 0;
  return (
    <section className="w-full my-32 px-2 md:px-16 lg:px-32">
      <div className={`text-xs ${styles.mission}`}>
        <p className={styles.right_border}>Mission</p>
        <p className={styles.right_border}>Description</p>
        <span className="flex border-box h-full items-center justify-center">Status</span>
      </div>

      {missions.map((mission) => {
        i += 1;
        return (
          <Mission
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            reserved={mission.reserved}
            id={mission.mission_id}
            bgColor={(i % 2 ? 'white' : 'lightgrey')}
          />
        );
      })}
    </section>
  );
};
export default Missions;
