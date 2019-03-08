import { mockUsers } from "./mock-users"

export const mockMessages = [
    {
        user: mockUsers[0],
        text: "Test om det funkar att skriva långt.",
        createdAt: new Date().toLocaleString()
    },
    {
        user: mockUsers[1],
        text: "Vilken ointressant text",
        createdAt: new Date().toLocaleString()
    },
    {
        user: mockUsers[0],
        text: "Du kan vara ointressant...",
        createdAt: new Date().toLocaleString()
    }
];