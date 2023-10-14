import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSortOrder  } from './store/reducer';

export function Header({ darkMode, setDarkMode }) {
    const changeTheme = () => {
      setDarkMode(!darkMode);
    }

    
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.news.sortOrder);
  
    const toggleSortOrder = () => {
        dispatch(toggleSortOrder()); // Use the correct action here
    }
  
    return (
      <div>
      <button onClick={toggleSortOrder}>
          {sortOrder === 'ASC' ? 'Oldest to Newest' : 'Newest to Oldest'}
      </button>
        <button onClick={changeTheme}>Change Theme</button>
      </div>
    );
  }
  
  export default Header;