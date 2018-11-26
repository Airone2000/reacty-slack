import React from 'react';
import LeftBar from '../Presentational/LeftBar';
import Conversation from '../Presentational/Conversation';
import CONVERSATIONS from '../Data/Conversations';

export const ConversationContext = React.createContext({});

class Slack extends React.Component
{
  state = {
    selectedConversation: null,
    conversations: CONVERSATIONS
  };

  constructor(props) {
    super(props);
    this.handleSelectConversation = this.handleSelectConversation.bind(this);
    this.saveNewMessage = this.saveNewMessage.bind(this);
  }

  handleSelectConversation(conversation) {
    this.setState({
      selectedConversation: conversation
    });
  }

  saveNewMessage(conversation, message) {

    const conversations = [...this.state.conversations];
    const indexOfConversation = conversations.indexOf(conversation);
    
    if(indexOfConversation > -1) {
      conversation = conversations[indexOfConversation];
      conversation.messages.push(message);
    }

    this.setState({
      conversations
    });
  }

  render() {
    return (
      <ConversationContext.Provider value={this.state.conversations}>
        <div className="Slack">
          <LeftBar 
            onSelectConversation={this.handleSelectConversation}
            selectedConversation={this.state.selectedConversation}
          />
          {this.state.selectedConversation && (
            <Conversation
              selectedConversation={this.state.selectedConversation}
              onNewMessage={this.saveNewMessage}
            />
          )}
        </div>
      </ConversationContext.Provider>
    );
  }
}

export default Slack;