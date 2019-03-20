import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { create } from '../../utils/api';
import { localUrl } from '../../constants/urls';
import { ResizableTextarea } from './ResizableTextarea';
import { useKeyPress } from '../../hooks/useKeyPress';

export const ChatInput = ({ currentUser, setDbUpdate, dbUpdate, messages }) => {
  const [value, setValue] = useState('');
  const [rows, setRows] = useState(1);
  const [doOnce, setDoOnce] = useState(false);
  const enterPress = useKeyPress('Enter');

  if (enterPress && !doOnce && value) {
    setDoOnce(true);
    create(`${localUrl}/api/messages`, {
      id: messages.length + 1,
      user: currentUser,
      text: value,
      createdAt: new Date().toLocaleString(),
    }).then(response => {
      console.log('response: ', response);
      setDbUpdate(!dbUpdate);
      document.getElementById('ChatInput').focus();
      setValue('');
      setRows(1);
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 25);
      setTimeout(() => setDoOnce(false), 1000);
    });
  }
  return (
    <>
      <ChatInputWrapper>
        <ResizableTextarea
          id="ChatInput"
          placeholder="Message..."
          value={value}
          setValue={setValue}
          rows={rows}
          setRows={setRows}
        />
        <Button
          onClick={() => {
            if (value && !doOnce) {
              setDoOnce(true);
              create(`${localUrl}/api/messages`, {
                id: messages.length + 1,
                user: currentUser,
                text: value,
                createdAt: new Date().toLocaleString(),
              }).then(response => {
                console.log('response: ', response);
                setDbUpdate(!dbUpdate);
                document.getElementById('ChatInput').focus();
                setTimeout(() => {
                  setRows(1);
                  setValue('');
                  window.scrollTo(0, document.body.scrollHeight);
                }, 25);
              });
            }
          }}
        >
          &#x27A3;
        </Button>
      </ChatInputWrapper>
    </>
  );
};

const ChatInputWrapper = styled.div`
  background-color: ${colors.darkerGrey};
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Input = styled.textarea`
  width: 100%;
  min-width: 50vw;
  padding: 0.5rem;
  background-color: ${colors.darkerGrey};
  color: ${colors.white};
  border: none;
  border-bottom: 1px solid ${colors.white};
  outline: none;
  border: 1px solid red;
  height: 100%;
`;

const Button = styled.button`
  padding: 0.6rem 0.6rem;
  font-size: 1.5em;
  border: none;
  border-radius: 10rem;
  background-color: ${colors.white};
  color: ${colors.darkGrey};
`;
