import React from 'react';

const User = ({user }) => {
  return (
    <div>
      <h2>User's profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Profession: {user.profession}</p>
      <p>Favorite book: {user.favoriteBook}</p>
    </div>
  );
};
//
export default User;
