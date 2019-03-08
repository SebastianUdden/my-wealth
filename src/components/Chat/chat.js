import React, { useState } from "react"
import styled from "styled-components"
import {colors } from "../../Constants/colors"
import { ChatInput } from "./chatInput"
import { ChatMessage} from "./chatMessage"
import { mockUsers } from "../../Constants/mock-users"
import { mockMessages } from "../../Constants/mock-messages"

export const Chat = () => {
    const [messages, setMessages] = useState(mockMessages);
    console.log('New messages: ', messages);
    
    return (
        <div>
            <h1>Chat</h1>
            <ChatBox>
                <ChatInput currentUser={mockUsers.find(mockUser => localStorage.getItem("username") === mockUser.username)} messages={messages} setMessages={setMessages} />
                {messages && messages.map(message => <ChatMessage message={message} />)}
            </ChatBox>
        </div>
    )
}

const ChatBox = styled.div`
    background-color: ${colors.grey};
    min-height: 50vh;
    padding: 2rem 2rem 4rem;
`;  