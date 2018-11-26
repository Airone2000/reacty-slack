class Participant
{
  id = Math.random().toString(36).substr(2, 9);
  nickname;

  constructor(nickname) {
    this.nickname = nickname;
  }
}

export default Participant;