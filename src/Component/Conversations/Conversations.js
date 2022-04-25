import React, { useState } from 'react'
import "./Conversations.css"


export default function Conversations(props) {
        const [open,setOpen]=useState(false)
    
        const sendMessage=()=>{
            console.log("working")
            setOpen(true)
            props.bind(true)
    }
    
  return (
      <>
    <div className='Conversation '>
        <img className='coversation-img' src='https://d2zon88i61wtiz.cloudfront.net/wp-content/uploads/2017/07/conversation-1940x900_31263.jpg' alt='ConversationImage'/>
        <button className='coversationName' onClick={sendMessage}>John</button>
        </div>
      
        </>
  )
}
