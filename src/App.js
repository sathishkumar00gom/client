import React, {useEffect,useState} from "react"
import './App.css';
import io from "socket.io-client" 
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Messenger from "./Component/Messenger";


const socket = io.connect("http://localhost:3001")

function App() {
  const [room,setRoom]=useState("")
  const [message,setMessage]=useState("")
  const [messageReceived,setMessageReceived]=useState("")


  const sendMessage=()=>{
    socket.emit("send_message",{message,room})
  }
  const joinRoom=()=>{
    if(room !== ""){
      socket.emit("join_room",room)
    }
  }

  useEffect(()=>{
socket.on("receive_Message",(data)=>{
  setMessageReceived(data.message)
})
  },[socket])


  return (
    <>
    {/* <div className="App">
      <input placeholder="Room Number"
          onChange={(event)=>{
            setRoom(event.target.value)
          }}
     />
      <button onClick={joinRoom}>Join Room</button>
      <input placeholder="Message" onChange={(event)=>{
          setMessage(event.target.value)
      }}/>
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message</h1>
      {messageReceived}
    </div> */}
    
    <Router>
      <Routes>
        <Route path="/Messenger" element={<Messenger/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
