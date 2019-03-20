import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginInput } from './LoginInput';
import { colors } from '../../constants/colors';

export const LoginForm = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      <LoginButton onClick={() => HandleLogin(username, password, setLoggedIn)}>
        Login
      </LoginButton>
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

const HandleLogin = (username, password, setLoggedIn) => {
  const lsUsername = localStorage.getItem('username');
  const lsPassword = localStorage.getItem('password');
  if (!lsUsername && !lsPassword) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setLoggedIn(true);
    console.log('loggedIn, setting');
  } else if (lsUsername === username && lsPassword === password) {
    setLoggedIn(true);
    console.log('loggedIn, set');
  } else {
    setLoggedIn(false);
    console.log('not loggedIn, set');
  }
};
