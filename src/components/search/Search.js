import React from 'react';
import './Search.scss';
import search from '../../../assets/icons/search.svg';
import logo from '../../../assets/icons/react.svg';

const Search = () => {
  return (
    <div className="searchWrapper d-flex gap3">
      <div className="searchBar d-flex gap1 relative">
        <img src={search} className="user-select-none pe-none" />
        <input type="text" placeholder="Search streams" />
      </div>
      <img src={logo} className="user-select-none pe-none" />
    </div>
  );
};
export default Search;
