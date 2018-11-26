import React from 'react';
import LeftBar from '../Presentational/LeftBar';
import Conversation from '../Presentational/Conversation';
import CONVERSATIONS from '../Data/Conversations';

export const ConversationContext = React.createContext({});

class Slack extends React.Component
{
  state = {
    selectedConversation: null
  };

  constructor(props) {
    super(props);

    this.handleSelectConversation = this.handleSelectConversation.bind(this);
  }

  handleSelectConversation(conversation) {
    this.setState({
      selectedConversation: conversation
    });
  }

  render() {
    return (
      <ConversationContext.Provider value={CONVERSATIONS}>
        <div className="Slack">
          <LeftBar 
            onSelectConversation={this.handleSelectConversation}
            selectedConversation={this.state.selectedConversation}
          />
          {this.state.selectedConversation && (
            <Conversation
              selectedConversation={this.state.selectedConversation}
            />
          )}
        </div>
      </ConversationContext.Provider>
    );
  }
}

export default Slack;