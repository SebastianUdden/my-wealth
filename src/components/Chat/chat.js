import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { get } from '../../utils/api';
import { apiUrl } from '../../constants/urls';
import { ChatInput } from './ChatInput';
import { ChatMessage } from './ChatMessage';

export const Chat = ({ users, setLoggedIn, token }) => {
  const [messages, setMessages] = useState(undefined);
  const [dbUpdate, setDbUpdate] = useState(false);
  const currentUser =
    users &&
    users.find(user => localStorage.getItem('username') === user.username);
  console.log('currentUser: ', currentUser);

  useEffect(() => {
    if (
      users &&
      Array.isArray(users) &&
      users.length !== 0 &&
      !users.find(user => localStorage.getItem('username') === user.username)
    ) {
      setLoggedIn(false);
    }
    get(`${apiUrl}/messages`, token).then(messages => {
      console.log('messages: ', messages);

      setMessages(messages);
    });
  }, [dbUpdate]);

  return (
    <ChatWrapper>
      <ChatBox>
        {messages &&
          Array.isArray(messages) &&
          messages.map(message => {
            const currentUser =
              users && users.find(user => user._id === message.user);

            return (
              <ChatMessage
                key={message._id}
                message={message}
                users={users}
                setDbUpdate={setDbUpdate}
                dbUpdate={dbUpdate}
                currentUser={
                  localStorage.getItem('username') ===
                  (currentUser && currentUser.username)
                }
                token={token}
              />
            );
          })}
        <ChatInput
          userId={currentUser && currentUser._id}
          messages={messages}
          setMessages={setMessages}
          setDbUpdate={setDbUpdate}
          dbUpdate={dbUpdate}
          token={token}
        />
      </ChatBox>
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 0.5rem 0.8rem 4rem;
`;
const ChatBox = styled.div`
  min-height: 50vh;
`;
