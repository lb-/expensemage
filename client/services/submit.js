const messageFormat = {role: 'submit'};

const messageHandler = function (msg, done) {
  //this should process the message data
  //check data is there
  //check data format
  //send it to a server
  return done(null, {answer: (msg.data), serverSays: 'yay'})
};

export default function (varo) {
  varo.handle(messageFormat, messageHandler);
};
