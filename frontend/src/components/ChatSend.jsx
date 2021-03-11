import React from 'react'

export const ChatSend = ({user, message}) => (
    <div className='rounded bg-green-300 text-right mb-2'>
        <strong className='mb-1'>{user}</strong>
        <br/>
        {message}
    </div>
)