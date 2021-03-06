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
  const [currentUser, setCurrentUser] = useState(undefined);
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    get(`${apiUrl}/users`, 'Unauthorized').then(users => {
      setUsers(users);
      setCurrentUser(
        users.find(
          user =>
            user.username === localStorage.getItem('username') &&
            user.password === localStorage.getItem('password')
        )
      );
    });
  }, [currentUser]);

  return (
    <>
      {!currentUser && !signup && (
        <MainWrapper>
          <LoginForm setSignup={setSignup} setCurrentUser={setCurrentUser} />
        </MainWrapper>
      )}
      {!currentUser && signup && (
        <MainWrapper>
          <SignupForm
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setSignup={setSignup}
          />
        </MainWrapper>
      )}
      {currentUser && (
        <>
          <TabWrapper>
            <Tab onClick={() => setTab('Users')}>Users</Tab>
            <Tab onClick={() => setTab('Chat')}>Chat</Tab>
            <Tab
              onClick={() => {
                localStorage.clear();
                setCurrentUser(undefined);
              }}
            >
              Sign Out
            </Tab>
          </TabWrapper>
          <MainWrapper>
            {tab === 'Users' && (
              <Users currentUser={currentUser} users={users} />
            )}
            {tab === 'Chat' && <Chat users={users} currentUser={currentUser} />}
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
