import {useEffect,useState} from "react"
import './App.css';
import io from "socket.io-client"

const socket = io.connect("http://localhost:3001")

function App() {
  const [message,setMessage]=useState("")
  const [messageReceived,setMessageReceived]=useState("")
  const [room,setRoom]=useState("")

  const joinRoom=()=>{
    if(room!==""){
      socket.emit("join_room",room)
    }
  }

  const sendMessage=()=>{
    socket.emit("send_message",{message,room})
  }

  useEffect(()=>{
socket.on("received_message",(data)=>{
  setMessageReceived(data.message)
})
  },[socket])


  return (
    <div className="App">
      <input placeholder="Message" onChange={(event)=>{
          setRoom(event.target.value)
      }}/>
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message</h1>
      {messageReceived}
    </div>
  );
}

export default App;
