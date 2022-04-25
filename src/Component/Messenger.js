import React,{useState,useEffect} from 'react'
import "./Messenger.css"
import Conversations from './Conversations/Conversations'
import Message from './Message/Message'
import ChatOnline from './ChatOnline/ChatOnline'
import io from "socket.io-client" 

const socket = io.connect("http://localhost:3001")


export default function Messenger(props) {
    const [messageReceived,setMessageReceived]=useState("")
    const [message,setMessage]=useState("")
    const[open,setOpen]=useState(false)
    const handleChange=(data)=>{
        setOpen(data)
    }

    const handleChanges=(e)=>{
        setMessage(e.target.value)
    }

    const sendMessage=()=>{
        socket.emit("send_message",{message})
    }

    useEffect(()=>{
        socket.on("receive_Message",(data)=>{
          setMessageReceived(data.message)
        })
          },[socket])
  return (
      <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<div>
    <div className='Messenger'>
        <div className='ChatMenu'>
            <div className="ChatMenuWrapper">
                <input className='ChatMenuInput' placeholder='Search for Friends'/>
                <Conversations bind={handleChange} />
                
                </div>
            </div>
        <div className='ChatBox'>
        <div className="ChatBoxWrapper">
            <div className='chatBoxTop'>
                {open && (<><Message/>,
                <Message own={true}/>,
               {messageReceived}</>)}
                
            <div className='chatBoxBottom'>
                <textarea className='chatMessageInput' onChange=
                {handleChanges}placeholder='write something...'></textarea>
                <button className='chatSumbitButton' onClick={sendMessage}>send</button></div>
            </div>
            </div>
            </div>
            
            <div className='ChatOnline'>
        <div className="ChatOnlineWrapper">
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/></div></div>
     </div>
</div>
</>
  )
}
