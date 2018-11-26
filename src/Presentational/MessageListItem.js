import React from 'react';

function MessageListItem({message}) {
  return (
    <div>
      <strong>{message.author.nickname} says:</strong>
      <p>{message.message}</p>
    </div>
  );
}

export default MessageListItem;