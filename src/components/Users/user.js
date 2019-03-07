import React from "react"
import styled from "styled-components"

export const User = ({user}) => {
    return (
        <UserWrapper>
            <h2>{user.username}</h2>
            <p>Name: {user.firstname} {user.lastname}</p>
            <p>Location: {user.location}</p>
        </UserWrapper>
    );
}

const UserWrapper = styled.div`
    background-color: #333;
    padding: 1rem;
    margin: 1rem;
`;