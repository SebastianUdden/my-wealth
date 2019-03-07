import React from "react"
import styled from "styled-components"
import { mockUsers } from "../Constants/mock-users"
import { User } from "./user" 

export const Users = () => {
    return (
        <div>
            <h1>Users</h1>
            {mockUsers.map(mockUser => {
                return (
                    <User user={mockUser} />
                )
            })}
        </div>
    );
}