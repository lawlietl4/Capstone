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
        name: 'Ticket Editor',
        description: 'edit/create tickets here',
        url: 'ticket-editor'
    },
    {
        name: 'Asset Viewer',
        description: 'View all school assets here',
        url: 'asset-viewer'
    },
    {
        name: 'Asset Editor',
        description: 'Edit school assets here',
        url: 'asset-editor'
    },
    {
        name:'Asset Lookup',
        description: 'Lookup any school assets here',
        url: 'asset-lookup'
    },
    {
        name: 'Loaning',
        description: 'Keep track of loaning things like chargers here',
        url: 'loaning'
    },
    {
        name: 'New Student Adder',
        description: 'add new students using this tool',
        url: 'student-adder'
    },
]
