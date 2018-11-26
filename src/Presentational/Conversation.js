import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function Conversation({selectedConversation, onNewMessage}) {
  return (
    <div className="Conversation">
      <MessageList messages={selectedConversation.messages} />
      <MessageInput onNewMessage={(message) => onNewMessage(selectedConversation, message)} />
    </div>
  );
}

export default Conversation;