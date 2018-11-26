import React from 'react';
import MessageListItem from './MessageListItem';

function MessageList({messages}) {

  if(messages.length === 0) {
    return (
      <div>
        <h1>
          Nothing to show. Start writing a message below.
        </h1>
      </div>
    );
  }
  else {
    return (
      <ul className="messageList">
        {messages.map(message => (
          <li 
            className="message"
            key={message.id}
          >
            <MessageListItem message={message} />
          </li>
        ))}
      </ul>
    );
  }
}

export default MessageList;