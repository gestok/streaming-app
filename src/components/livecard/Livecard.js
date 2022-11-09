import React from 'react';
import './Livecard.scss';

const Livecard = ({ thumb, status, game, url, logo, name, viewers }) => {
  return (
    <div className="liveCard d-flex flex-column gap2">
      <a
        target="_blank"
        href={url ? url : '#'}
        className={`${!url && 'gray'} preview d-flex relative`}
      >
        <img
          className="d-flex pe-none user-select-none"
          src={thumb}
          alt={`${name} Live`}
        />
        <span className="status pe-none user-select-none">
          {status === 'offline' ? 'OFF' : 'LIVE'}
        </span>
      </a>
      <div className="vitals d-flex gap2 justify-content-space-between align-center relative">
        <img src={thumb} className={`${!url && 'gray'} blurred`} />
        <div className="d-flex gap1 justify-content-space-between align-center glass user-select-none">
          <div className="d-flex align-center gap1">
            {logo && <img src={logo} className="logo d-flex" />}
            <div className="d-flex flex-column gap1">
              {name && <span className="name">{name}</span>}
              {url && <span className="playing">{game}</span>}
            </div>
          </div>
          {url && <div className="viewers">{viewers} VIEWERS</div>}
        </div>
      </div>
    </div>
  );
};
export default Livecard;
