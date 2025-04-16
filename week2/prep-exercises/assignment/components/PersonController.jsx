import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PersonInfo from './PersonInfo';

const PersonController = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const getPerson = async () => {
      try {
        const response = await fetch('https://www.randomuser.me/api?results=1');
        const data = await response.json();
        const user = data.results[0];

        const fixedPerson = {
          first_name: user.name.first,
          last_name: user.name.last,
          email: user.email
        };
        setPerson(fixedPerson);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPerson();
  }, []);
  return (
    <div>
      <PersonInfo {...person} />
    </div>
  );
};

export default PersonController;
