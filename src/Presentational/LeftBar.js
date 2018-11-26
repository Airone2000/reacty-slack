import React from 'react';
import {ConversationContext} from '../Containers/Slack';

function LeftBar() {
  return (
    <ConversationContext.Consumer>
      {(conversations) => (
        <div className="LeftBar">
          <nav>
            <ul>
              {
                conversations.map(conversation => (
                  <li key={conversation.id}>
                    {conversation.participants[0].nickname}
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      )}
    </ConversationContext.Consumer>
  );
}

export default LeftBar;