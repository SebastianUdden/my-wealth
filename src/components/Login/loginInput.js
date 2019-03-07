import React from "react"
import styled from "styled-components"

export const LoginInput = ({placeholder, type}) => {
    return (
        <Input placeholder={placeholder} type={type}  />
    )
}

const Input = styled.input`
    display: flex;
    margin: 1rem;
    padding: 0.5rem;
`;

