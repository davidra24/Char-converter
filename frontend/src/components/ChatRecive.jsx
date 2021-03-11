import React from 'react'

export const ChatRecive = ({user, message}) => (
    <div className='rounded bg-gray-200 mb-2'>
        <strong className='mb-1'>{user}</strong>
        <br/>
        {message}
    </div>
)