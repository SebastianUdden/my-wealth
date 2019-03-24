import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { get } from '../../utils/api';
import { ChatInput } from './ChatInput';
import { ChatMessage } from './ChatMessage';
import { localUrl } from '../../constants/urls';

export const Chat = ({ setLoggedIn }) => {
  const [messages, setMessages] = useState(undefined);
  const [users, setUsers] = useState([]);
  const [dbUpdate, setDbUpdate] = useState(false);

  useEffect(() => {
    if (
      users &&
      Array.isArray(users) &&
      users.length !== 0 &&
      !users.find(user => localStorage.getItem('username') === user.username)
    ) {
      setLoggedIn(false);
    }
    get(`${localUrl}/messages`).then(messages => {
      console.log('messages: ', messages);

      setMessages(messages);
    });
    get(`${localUrl}/users`).then(users => {
      setUsers(users);
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
                key={message.id}
                message={message}
                users={users}
                setDbUpdate={setDbUpdate}
                dbUpdate={dbUpdate}
                currentUser={
                  localStorage.getItem('username') ===
                  (currentUser && currentUser.username)
                }
              />
            );
          })}
        <ChatInput
          currentUser={
            users &&
            Array.isArray(users) &&
            users.find(
              user => localStorage.getItem('username') === user.username
            )
          }
          messages={messages}
          setMessages={setMessages}
          setDbUpdate={setDbUpdate}
          dbUpdate={dbUpdate}
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
