import React from 'react';
import LeftBar from '../Presentational/LeftBar';
import Conversation from '../Presentational/Conversation';
import CONVERSATIONS from '../Data/Conversations';


export const ConversationContext = React.createContext({});

class Slack extends React.Component
{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ConversationContext.Provider value={CONVERSATIONS}>
        <div className="Slack">
          <LeftBar />
          <Conversation />
        </div>
      </ConversationContext.Provider>
    );
  }
}

export default Slack;