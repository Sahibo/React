import User from './User';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: 'Sahib',
    age: 19,
    profession: 'Programmer',
    favoriteBook: 'The Essential Marcus Aurelius',
  });

  const [newProfession, setNewProfession] = useState('');
  const [newFavoriteBook, setNewFavoriteBook] = useState('');

  const changeProfession = (newProfession) => {
    if (newProfession !== '') {
      setUser({ ...user, profession: newProfession });
      setNewProfession('');
    }
  };

  const makeFavoriteBook = (newFavoriteBook) => {
    if (newFavoriteBook !== '') {
      setUser({ ...user, favoriteBook: newFavoriteBook });
      setNewFavoriteBook('');
    }
  };

  return (
    <div style={{ margin: '50px' }}>
      <User user={user}/>
      <div>
        <input type="text" placeholder="New profession" value={newProfession} onChange={(e) => setNewProfession(e.target.value)}/>
        <button onClick={() => changeProfession(newProfession)} style={{ margin: '10px' }}>Change profession</button>
      </div>

      <div>
        <input type="text" placeholder="New favorite book" value={newFavoriteBook} onChange={(e) => setNewFavoriteBook(e.target.value)}/>
        <button onClick={() => makeFavoriteBook(newFavoriteBook)} style={{ margin: '10px' }}>Change favorite book</button>
      </div>

    </div>
  );
}

export default App;
