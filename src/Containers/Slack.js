import React from 'react';
import LeftBar from '../Presentational/LeftBar';
import Conversation from '../Presentational/Conversation';

class Slack extends React.Component
{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Slack">
        <LeftBar />
        <Conversation />
      </div>
    );
  }
}

export default Slack;