import React from 'react';
import './Streamer.scss';
import badge from '../../../assets/icons/badge.svg';

const Streamer = ({ banner, logo, name, status, followers, videos }) => {
  const formatFollowers = (num) =>
    num < 1000 ? num : `${(num / 1000).toFixed(1)}K`;

  return (
    <div className="streamerCard d-flex flex-column relative">
      <img className="banner" src={banner} />
      <div className="details d-flex flex-column">
        <div className="d-flex justify-content-center">
          <img className="logo" src={logo} />
        </div>
        <div className="d-flex gap1 align-center justify-content-center">
          <span className="name">{name}</span>
          <img src={badge} alt="verified" />
        </div>
        <div
          className={`status ${status} d-inline-flex justify-content-center relative`}
        >
          {status}
        </div>
        <div className="d-flex justify-content-space-between gap2">
          <div className="d-flex flex-column gap1">
            <span className="value">{formatFollowers(followers)}</span>
            <span className="label">FOLLOWERS</span>
          </div>
          <div className="d-flex flex-column text-right gap1">
            <span className="value">{videos}</span>
            <span className="label">VIDEOS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Streamer;
