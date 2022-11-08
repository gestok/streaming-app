import React from 'react';
import './Navigation.scss';
import home from '../../assets/icons/home.svg';
import play from '../../assets/icons/play.svg';
import joystick from '../../assets/icons/joystick.svg';
import message from '../../assets/icons/message.svg';

const Navigation = () => {
  return (
    <div className="navbar d-flex">
      <a
        className="btn d-flex align-center justify-content-center user-select-none"
        href="#"
        title="Home"
      >
        <img src={home} alt="" className="d-flex" />
      </a>
      <a
        className="btn d-flex align-center justify-content-center user-select-none"
        href="#"
        title="Clips"
      >
        <img src={play} alt="" className="d-flex" />
      </a>
      <a
        className="btn d-flex align-center justify-content-center user-select-none"
        href="#"
        title="Add"
      >
        <span className="add d-flex justify-content-center align-center">
          +
        </span>
      </a>
      <a
        className="btn d-flex align-center justify-content-center user-select-none"
        href="#"
        title="Games"
      >
        <img src={joystick} alt="" className="d-flex" />
      </a>
      <a
        className="btn d-flex align-center justify-content-center user-select-none"
        href="#"
        title="Messages"
      >
        <img src={message} alt="" className="d-flex" />
      </a>
    </div>
  );
};
export default Navigation;
