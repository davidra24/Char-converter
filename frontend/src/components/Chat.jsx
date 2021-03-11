import React from 'react';
import { ChatRecive } from './ChatRecive';
import { ChatSend } from './ChatSend';

export const Chat = ({ user, message, sendMessage, chat, uid }) => (
  <div className='flex justify-center items-center w-screen h-screen'>
    <div className='bg-blue-400 w-10/12 h-5/6 flex justify-center items-center flex-col'>
      <h2 className='text-white font-bold text-3xl mt-10 mb-10'>
        Welcome {user}
      </h2>
      <div className='flex justify-evenly items-start w-full h-full mx-60'>
        <div className='w-2/12 h-3/6'>
          <h4 className='mb-10 text-white text-xl font-bold'>
            CONNECTED USERS
          </h4>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {user}
          </span>
        </div>
        <div className='bg-white w-8/12 h-5/6 rounded flex flex-col justify-between'>
          <div className='bg-gray-300 p-4'>
            <h5 className='text-white text-center text-xl'>CHAT ROOM</h5>
          </div>
          <div className='bg-white h-4/5'>
            <div className='w-full h-full p-5 overflow-scroll'>
              {chat.map((chatMessage) => (
                <div key={chatMessage}>
                  {chatMessage.uid === uid ? (
                    <ChatSend
                      user={chatMessage.user}
                      message={chatMessage.message}
                    />
                  ) : (
                    <ChatRecive
                      user={chatMessage.user}
                      message={chatMessage.message}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className='bg-gray-300'>
            <form className='p-2 flex' onSubmit={sendMessage}>
              <input
                type='text'
                className='w-10/12 shadow appearance-none border rounded py-2 px-3 text-grey-darker'
                {...message}
              />
              <button className='mx-auto w-1/12 bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'>
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
