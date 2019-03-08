import React from "react"
import styled from "styled-components"
import { colors } from "../../Constants/colors" 

export const ChatMessage = ({message}) => {
    return (
        <ChatMessageWrapper>
            <Avatar src={message.user.image} alt="Avatar" />
            <div>
                <Message>
                    {message.text}
                </Message>
                <CreatedAt>{message.createdAt}</CreatedAt>
            </div>
        </ChatMessageWrapper>
    );
}

const ChatMessageWrapper = styled.div`
    background-color: ${colors.darkGrey};
    color: ${colors.white};
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    max-width: 54vw;
    display: flex;
`;

const Message = styled.p`
    margin: 0;
    padding: 0;
`;

const CreatedAt = styled.p`
    margin: 0;
    padding: 0;
    color: ${colors.brightGrey}
`;

const Avatar = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 5rem;
    margin: 0 0.5rem 0 0;
`;