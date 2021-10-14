export interface pages {
name: string;
description: string;
url: string;
}

export const pages = [
    {
        name: 'Ticket Viewer',
        description: 'ticket view component',
        url: 'ticket-viewer'
    },
    {
        name:'Login',
        description: 'login here',
        url: 'login'
    },
    {
        name: 'New Student Adder',
        description: 'add new students using this tool',
        url: 'student-adder'
    },
    {
        name: 'not implemented yet',
        description: 'you landed here because you clicked on something that has no content',
        url: '404not-found'
    },
]