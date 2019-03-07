import React from "react"
import styled from "styled-components"
import { LoginInput } from "./loginInput";

export const LoginForm = () => {
    return (
            <LoginFormWrapper>
                <h1>Login</h1>
                <LoginInput placeholder="username" type="text"/>
                <LoginInput placeholder="password" type="password"/>
            </LoginFormWrapper>
    );
}

const LoginFormWrapper = styled.div`
    text-align: center;
`;
