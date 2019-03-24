import React, { useState, useEffect } from 'react';
import { User } from './User';
import { get } from '../../utils/api';
import { localUrl } from '../../constants/urls';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    get(`${localUrl}/users`).then(users => {
      setUsers(users);
    });
  }, []);

  return (
    <div>
      {users &&
        Array.isArray(users) &&
        users.map(user => {
          return <User user={user} />;
        })}
    </div>
  );
};
