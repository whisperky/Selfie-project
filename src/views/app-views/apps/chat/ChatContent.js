import React from 'react'
import { Route, Routes, } from 'react-router-dom';
import Conversation from './Conversation';

const ConversationEmpty = () => (
  <div className="chat-content-empty">
    <div className="text-center">
      <img src="/img/others/img-11.png" alt="Start a Conversation" />
      <h1 className="font-weight-light">Start a conversation</h1>
    </div>
  </div>
)

const ChatContent = () => {
  return (
    <Routes>
      <Route path={`:id`} element={<Conversation />} />
      <Route path={`/`} element={<ConversationEmpty />} />
    </Routes>
  )
}

export default ChatContent
