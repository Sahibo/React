import './Header.css';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSortOrder  } from './store/reducer'
import { React, useState } from 'react';

export function Header({ darkMode, setDarkMode  }) {

  const sortOrder = useSelector((state) => state.news.sortOrder);
  let dispatch = useDispatch()

  const toggleSortOrderHandle = () => {
    dispatch(toggleSortOrder());
  }

  const changeTheme = () => {
      setDarkMode(!darkMode);
    }
  
    return (
      <div className='header-container'>
        <button className='sortButton' onClick={toggleSortOrderHandle}>
          {sortOrder === 'ASC' ? 'Oldest to Newest ▼' : 'Newest to Oldest ▲'}
        </button>
        <button className='themeButton' onClick={changeTheme}>{darkMode ? '🌜' : '🌞'}</button>
      </div>
    );
  }
  
  export default Header;