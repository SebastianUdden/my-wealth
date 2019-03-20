import React from 'react';
import styled from 'styled-components';

export const Avatar = ({ image, currentUser }) => {
  return <AvatarImage currentUser={currentUser} src={image} alt="Avatar" />;
};

const AvatarImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  margin: ${p => (!p.currentUser ? '1.2rem' : 0)} 0.5rem 0 0;
`;
