import Conversation from '../Models/Conversation';
import Participant from '../Models/Participant';
import Message from '../Models/Message';

const Florence = new Participant('Florence');
const Erwan = new Participant('Erwan');
const conversation1 = new Conversation();
conversation1
  .addParticipant(Florence)
  .addMessage(new Message(Florence, 'Coucou'))
  .addMessage(new Message(Erwan, 'Heeeeey'))
  .addMessage(new Message(Erwan, 'asv?'))
  .addMessage(new Message(Florence, '????????'))
;


const conversation2 = new Conversation();
conversation2.addParticipant(new Participant('Edwin'));

const conversation3 = new Conversation();
conversation3.addParticipant(new Participant('Claude'));

const conversation4 = new Conversation();
conversation4.addParticipant(new Participant('Elisabeth'));

const CONVERSATIONS = [
  conversation1,
  conversation2,
  conversation3,
  conversation4
];

export default CONVERSATIONS;