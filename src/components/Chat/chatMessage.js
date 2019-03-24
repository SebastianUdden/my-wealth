import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { Avatar } from '../users/Avatar';
import { remove } from '../../utils/api';
import { localUrl } from '../../constants/urls';

export const ChatMessage = ({
  message,
  users,
  setDbUpdate,
  dbUpdate,
  currentUser,
}) => {
  const [clicked, setClicked] = useState(false);
  const user = users && users.find(user => user._id === message.user);

  return (
    <>
      <ChatMessageWrapper currentUser={currentUser}>
        <Avatar currentUser={currentUser} image={user && user.image} />
        <div>
          {!currentUser && <Username>{message.user.username}</Username>}
          <Message
            empty={!message.text || !message.text.trim()}
            currentUser={currentUser}
            onClick={() => setClicked(!clicked)}
          >
            {message.text}{' '}
            {currentUser && clicked && (
              <Delete
                onClick={() => {
                  remove(`${localUrl}/messages/${message._id}`).then(
                    response => {
                      console.log('response: ', response);
                      setDbUpdate(!dbUpdate);
                    }
                  );
                }}
              >
                &#x2715;
              </Delete>
            )}
          </Message>
          <CreatedAt>
            {message.createdAt && new Date(message.createdAt).toLocaleString()}
          </CreatedAt>
        </div>
      </ChatMessageWrapper>
    </>
  );
};

const ChatMessageWrapper = styled.div`
  color: ${colors.white};
  margin: 0.5rem 0;
  padding: 1rem 0.5rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: ${p => (p.currentUser ? 'row-reverse' : 'row')};
  max-width: 100%;
`;

const Message = styled.p`
  background-color: ${p =>
    p.currentUser ? colors.darkishGrey : colors.brightGrey};
  margin: 0 0.2rem;
  padding: 0.5rem 0.7rem;
  display: flex;
  justify-content: ${p => (p.empty ? 'flex-end' : 'space-between')};
  align-items: flex-start;
  border-radius: 1rem;
  word-break: break-word;

  :hover {
    background-color: ${colors.brightGrey};
    cursor: pointer;
  }
`;

const CreatedAt = styled.p`
  margin: 0 1rem;
  padding: 0;
  color: ${colors.brightGrey};
`;

const Username = styled.p`
  margin: 0.1rem 0.8rem;
  padding: 0;
  color: ${colors.brightGrey};
`;

const Delete = styled.span`
  background-color: ${colors.brightGrey};
  color: ${colors.white};
  border-radius: 1rem;
  margin-left: 0.5rem;
  padding: 0 0.3rem;
  :hover {
    color: ${colors.white};
  }
`;
