import React from 'react';
import './Livecard.scss';

const Livecard = ({ thumb, status, game, url, logo, name, viewers }) => {
  return (
    <div className="liveCard d-flex flex-column gap1">
      <a
        href={url ? url : '#'}
        className={`${!url && 'gray'} preview d-flex relative`}
      >
        <img className="d-flex" src={thumb} alt={`${name} Live`} />
        <span className="status">{status === 'offline' ? 'OFF' : 'LIVE'}</span>
      </a>
      <div className="vitals d-flex gap2 justify-content-space-between align-center relative">
        <img src={thumb} className={`${!url && 'gray'} blurred`} />
        <div className="d-flex gap1 justify-content-space-between align-center glass">
          <div className="d-flex align-center gap1">
            {logo && <img src={logo} className="logo" />}
            <div className="d-flex flex-column gap1">
              {name && <span className="name">{name}</span>}
              {url && <span className="playing">playing {game}</span>}
            </div>
          </div>
          {url && <span className="viewers">{viewers} VIEWERS</span>}
        </div>
      </div>
    </div>
  );
};
export default Livecard;
