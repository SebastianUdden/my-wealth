import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../constants/colors';
import { Chat } from './chat/Chat';
import { LoginForm } from './login/LoginForm';
import { Users } from './users/Users';

export const Main = () => {
  const [tab, setTab] = useState('Chat');
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      {!loggedIn && (
        <MainWrapper>
          <LoginForm setLoggedIn={setLoggedIn} />
        </MainWrapper>
      )}
      {loggedIn && (
        <>
          <TabWrapper>
            <Tab onClick={() => setTab('Users')}>Users</Tab>
            <Tab onClick={() => setTab('Chat')}>Chat</Tab>
          </TabWrapper>
          <MainWrapper>
            {tab === 'Users' && <Users setLoggedIn={setLoggedIn} />}
            {tab === 'Chat' && <Chat setLoggedIn={setLoggedIn} />}
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
