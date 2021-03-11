import React from 'react'

export const WaitRoom = ({user, setUserToChat}) => {
    
    const handleClick = (event) => {
        event.preventDefault()
        setUserToChat()
    }

    return(
    <div className="flex w-screen h-screen justify-center items-center">
        <div className="w-8/12 h-4/6 bg-blue-400 flex justify-center items-center flex-col">
            <h1 className="text-white mb-6 font-bold text-4xl">MY CHAT CONVERSOR</h1>
            <form className="m-4 flex mt-6" onSubmit={handleClick}>
    	        <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Put your username" {...user} />
		        <button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Start Chat</button>
	        </form>
        </div>
    </div>
)}