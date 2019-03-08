import React, { useState } from "react"
import styled from "styled-components"
import { LoginForm } from "../components/Login/loginForm"
import { Users } from "../components/Users/users"
import { Chat } from "../components/Chat/chat"
import { colors } from "../Constants/colors"

export const Main = () => {
    const [tab, setTab] = useState('Chat');
    const [loggedIn, setLoggedin] = useState(false);

    return (
        <>
            {!loggedIn && 
                <MainWrapper>
                    <LoginForm setLoggedin={setLoggedin} />
                </MainWrapper>}
            {loggedIn && (
                <>
                    <TabWrapper>
                        <Tab onClick={() => setTab('Users')}>Users</Tab>
                        <Tab onClick={() => setTab('Chat')}>Chat</Tab>
                    </TabWrapper>
                    <MainWrapper>
                        {tab === 'Users' && <Users />}
                        {tab === 'Chat' && <Chat />}
                    </MainWrapper>
                </>
            )}
        </>
    )
}


const MainWrapper = styled.div`
    color: ${colors.white};
    display: flex;
    justify-content: center;
`;

const TabWrapper = styled.div`
    display: flex;
    justify-content: stretch;
`;

const Tab = styled.button`
    background-color: ${colors.darkGrey};
    color: ${colors.white};
    width: 100%;
    padding: 0.8rem;
    margin: 1rem 0.5rem;
    border: none;

    :hover {
        background-color: ${colors.grey};
        cursor: pointer;
    }
`;