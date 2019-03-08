import React, { useState } from "react"
import styled from "styled-components"
import { colors } from "../../Constants/colors" 

export const ChatInput = ({currentUser, messages, setMessages}) => {
    const [value, setValue] = useState("");

    return (
        <ChatInputWrapper>
            <Input placeholder="Message" value={value} onChange={(e) => setValue(e.target.value)} />
            <Button onClick={() => {
                setValue("");
                setMessages([...messages, { 
                    user: currentUser, 
                    text: value,
                    createdAt: new Date().toLocaleString()
                }])}}>&#x02193;</Button>
        </ChatInputWrapper>
    );
}

const ChatInputWrapper = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
`;

const Input = styled.input`
    min-width: 50vw;
    padding: 0.5rem;
    background-color: ${colors.grey};
    color: ${colors.white};
    border: none;
    border-bottom: 1px solid ${colors.white};
    outline: none;
`;

const Button = styled.button`
    padding: 0.6rem 0.8rem;
    font-size: 1.5em;
    border: none;
    border-radius: 10rem;
    background-color: ${colors.white};
    color: ${colors.darkGrey};
`;