import React from 'react';

const Header = ({ searchTerm, onInputChange }) => {
  return (
    <header>
      <input
        type="text"
        placeholder="Поиск по названию..."
        value={searchTerm}
        onChange={onInputChange}
      />
    </header>
  );
};

export default Header;