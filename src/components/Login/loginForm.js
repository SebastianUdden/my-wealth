import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { get } from '../../utils/api';
import { LoginInput } from './LoginInput';
import { colors } from '../../constants/colors';
import { localUrl } from '../../constants/urls';

export const LoginForm = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState('');
  const [loginAttempt, setLoginAttempt] = useState(0);

  useEffect(() => {
    get(`${localUrl}/users`).then(users => {
      console.log('Login-users: ', users);
      setUsers(users);
    });
  }, [loginAttempt]);

  return (
    <LoginFormWrapper>
      <h1>Login</h1>
      <LoginInput
        placeholder="Username"
        type="text"
        value={username}
        setValue={setUsername}
      />
      <LoginInput
        placeholder="Password"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <LoginButton
        onClick={() => {
          setLoginAttempt(loginAttempt + 1);
          HandleLogin(username, password, setLoggedIn, users);
        }}
      >
        Login
      </LoginButton>
      {loginAttempt > 0 && (
        <p style={{ color: 'red' }}>Invalid login ({loginAttempt})</p>
      )}
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.div`
  text-align: center;
`;

const LoginButton = styled.button`
  background-color: ${colors.darkerGrey};
  color: ${colors.white};
  padding: 0.5rem 3rem;
  margin: 1rem;

  :hover {
    background-color: ${colors.grey};
    cursor: pointer;
  }
`;

const HandleLogin = (username, password, setLoggedIn, users) => {
  localStorage.clear();
  if (users.find(user => user.username === username)) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
    console.log('not loggedIn, set');
  }
};
