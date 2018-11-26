class Conversation
{
  id = Math.random().toString(36).substr(2, 9);
  participants = [];
  messages = [];

  /**
   * Add a Message object to the conversation.
   */
  addMessage(message) {
    this.messages.push(message);
    return this;
  }

  /**
   * Delete a message from the collection of Messages.
   */
  deleteMessage(message) {
    const indexOfMessage = this.messages.indexOf(message);
    if(indexOfMessage > -1) {
      this.messages.splice(indexOfMessage, 1);
    }
    return this;
  }

  /**
   * Add a Participant object to the conversation.
   */
  addParticipant(participant) {
    const indexOfParticipant = this.participants.indexOf(participant);
    if(indexOfParticipant > -1) {
      return this;
    }
    this.participants.push(participant);
    return this;
  }

  /**
   * Delete a participant from the collection of participants.
   */
  deleteParticipant(participant) {
    const indexOfParticipant = this.participants.indexOf(participant);
    if(indexOfParticipant > -1) {
      this.participants.splice(indexOfParticipant, 1);
    }
    return this;
  }
}

export default Conversation;