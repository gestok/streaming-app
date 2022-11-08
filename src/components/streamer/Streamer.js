import React from 'react';
import './Streamer.scss';
import badge from '../../../assets/icons/badge.svg';

const Streamer = ({ cover, logo, name, status, followers, viewers, videos }) => {
  return (
    <div className="streamerCard d-flex flex-column relative">
      <img src={badge} />
    </div>
  );
};
export default Streamer;
