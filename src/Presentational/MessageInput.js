import React from 'react';
import Message from '../Models/Message';
import {ERWAN} from '../Data/Conversations';

function MessageInput({onNewMessage}) {

  let inputRef = React.createRef();


  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      let messageText = inputRef.current.value.trim();
      if(messageText.length > 0) {
        const message = new Message(ERWAN, messageText);
        onNewMessage(message);
        inputRef.current.value = '';
      }
    }}>
      <input
        className="MessageInput"
        type="text" 
        placeholder="Type your message..."
        ref={inputRef}
      />
    </form>
  );
}

export default MessageInput;