import React from 'react'
import "./Message.css"

export default function Message({own}) {
  return (
      <>
      <div className={  own ? "message own": "message"}>
   
        <div className='messageTop'>
            <img className='messageImg' src='https://d2zon88i61wtiz.cloudfront.net/wp-content/uploads/2017/07/conversation-1940x900_31263.jpg' alt='ConversationImage' />
            <p className='messageText'> Hello this is a message</p></div>
        <div className='messageBot'>2 hours ago</div>
        </div>
        </>
  )
}
