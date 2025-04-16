import React from 'react';

const PersonInfo = ({ first_name, last_name, email }) => {
  return (
    <ul>
      <li>first name: {first_name}</li>
      <li>last name: {last_name}</li>
      <li>email: {email}</li>
    </ul>
  );
};

export default PersonInfo;
