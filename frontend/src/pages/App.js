import React, { useEffect, useState } from 'react'
import socketIOClient from "socket.io-client";
import { Chat } from '../components/Chat';
import { WaitRoom } from '../components/WaitRoom';
import { useInputValue } from '../hooks/useInput';
import { v4 as uuid } from "uuid";
import { useForceUpdate } from '../hooks/useForceUpdate';

const ENDPOINT = "http://localhost:5000";

function App() {

  const forceUpdate = useForceUpdate()
  const [uid, setUid] = useState("")
  const username = useInputValue("")
  const message = useInputValue("")
  const [user, setUser] = useState("")
  const [socket, setSocket] = useState(null)
  const [chat, setChat] = useState([])
  
  useEffect(() => {
    const uid = uuid()
    setUid(uid)
  }, []) 

  useEffect(() => {
    const newSocket = socketIOClient(ENDPOINT)
    setSocket(newSocket);
    newSocket.on('reciveMessage', (data) => {
      const auxChat = chat
      auxChat.push(JSON.parse(data))
      setChat(auxChat)
      forceUpdate();
    })
  }, [chat]);

  const setUserToChat = () => {
    setUser(username.value)
  }

  const sendMessage = (event) => {
    event.preventDefault()
    const sendMsg = {uid, user, message: message.value}
    const strMsg = JSON.stringify(sendMsg)
    socket.emit("sendMessage", strMsg);
    message.clean()
  }

  if (!user) return <WaitRoom user={username} setUserToChat={setUserToChat} />
  return <Chat user={user} message={message} sendMessage={sendMessage} chat={chat} uid={uid}/>
}

export default App;
