import React from 'react';
import { User } from './User';

export const Users = ({ users }) => (
  <div>
    {users &&
      Array.isArray(users) &&
      users.map(user => {
        return <User user={user} />;
      })}
  </div>
);
