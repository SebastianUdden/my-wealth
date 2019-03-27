import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../constants/colors';
import { Chat } from './chat/Chat';
import { LoginForm } from './login/LoginForm';
import { SignupForm } from './signup/SignupForm';
import { Users } from './users/Users';
import { get } from '../utils/api';
import { apiUrl } from '../constants/urls';

export const Main = () => {
  const [tab, setTab] = useState('Chat');
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [signup, setSignup] = useState(false);
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    setToken(localStorage.getItem('username'));
    get(`${apiUrl}/users`, token).then(users => {
      setUsers(users);
      setLoggedIn(
        users.find(user => user.username === localStorage.getItem('username'))
      );
    });
  }, []);

  return (
    <>
      {!loggedIn && !signup && (
        <MainWrapper>
          <LoginForm setSignup={setSignup} setLoggedIn={setLoggedIn} />
        </MainWrapper>
      )}
      {!loggedIn && signup && (
        <MainWrapper>
          <SignupForm setLoggedIn={setLoggedIn} setSignup={setSignup} />
        </MainWrapper>
      )}
      {loggedIn && (
        <>
          <TabWrapper>
            <Tab onClick={() => setTab('Users')}>Users</Tab>
            <Tab onClick={() => setTab('Chat')}>Chat</Tab>
            <Tab
              onClick={() => {
                localStorage.clear();
                setLoggedIn(false);
              }}
            >
              Sign Out
            </Tab>
          </TabWrapper>
          <MainWrapper>
            {tab === 'Users' && (
              <Users users={users} setLoggedIn={setLoggedIn} token={token} />
            )}
            {tab === 'Chat' && (
              <Chat users={users} setLoggedIn={setLoggedIn} token={token} />
            )}
          </MainWrapper>
        </>
      )}
    </>
  );
};

const MainWrapper = styled.div`
  color: ${colors.white};
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: stretch;
`;

const Tab = styled.button`
  background-color: ${colors.darkGrey};
  color: ${colors.white};
  width: 100%;
  padding: 0.8rem 0;
  margin: 1rem 0.5rem;
  border: none;

  :hover {
    background-color: ${colors.grey};
    cursor: pointer;
  }
`;
