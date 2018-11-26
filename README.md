# Creating a slack like App using React

1. Mock data
2. LeftBar
3. MainView

**Terms:**
- ConversationPicker
- ConversationView
- MessageList
- MessageInput

  
  

*Conversation*
{
id: number,
participants: array,
messages: array
]

*Participant*
{
id: number,
nickname: string
}

*Message*
{
id: number,
author: Participant,
message: string
}