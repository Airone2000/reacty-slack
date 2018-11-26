import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function Conversation({selectedConversation}) {
  return (
    <div className="Conversation">
      <MessageList messages={selectedConversation.messages} />
      <MessageInput />
    </div>
  );
}

export default Conversation;