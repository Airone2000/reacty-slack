class Message
{
  id = Math.random().toString(36).substr(2, 9);
  author;
  message;

  constructor(author, message) {
    this.author = author;
    this.message = message;
  }
}

export default Message;