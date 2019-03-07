import React, { useState } from "react"
import styled from "styled-components"
import { LoginForm } from "../components/Login/loginForm"
import { Users } from "../components/Users/users"


export const Main = () => {
    const [tab, setTab] = useState('Users')

    return (
        <>
            <Tab onClick={() => setTab('Login')}>Login</Tab>
            <Tab onClick={() => setTab('Users')}>Users</Tab>
            <MainWrapper>
                {tab === 'Login' && <LoginForm />}
                {tab === 'Users' && <Users />}
            </MainWrapper>
        </>
    )
}


const MainWrapper = styled.div`
    color: white;
    display: flex;
    justify-content: center;
`;

const Tab = styled.button`
    background-color: #333;
    color: white;
    width: 50%;
    padding: 0.8rem;
    margin: 1rem 0;
    border: none;

    :hover {
        background-color: #444;
        cursor: pointer;
    }
`;