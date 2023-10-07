import React from 'react';
import { Link } from "react-router-dom";

export function Header ({ searchTerm, onInputChange }) {
  return (
    <header style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
       <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <input style={{height: '20px'}}
        type="text"
        placeholder="Поиск по названию..."
        value={searchTerm}
        onChange={onInputChange}
      />
    </header>
  );
};