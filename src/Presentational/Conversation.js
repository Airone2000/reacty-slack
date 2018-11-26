import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import {default as ConversationType} from '../Models/Conversation';

function Conversation({selectedConversation, onNewMessage}) {
  return (
    <div className="Conversation">
      <MessageList messages={selectedConversation.messages} />
      <MessageInput onNewMessage={(message) => onNewMessage(selectedConversation, message)} />
    </div>
  );
}

Conversation.propTypes = {
  selectedConversation: PropTypes.instanceOf(ConversationType).isRequired
};

export default Conversation;