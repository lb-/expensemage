const messageFormat = {role: 'sum'};

// not 100% on why the locals are set like this
// see https://github.com/senecajs/react-example
// works without it for now
// let locals = {
//   varo: null
// };

const sum = function (msg, done) {
  return done(null, {data: (msg.left + msg.right), tech: 'crunch'})
};

//exports the functions to be used as plugins
export default function (varo) {
  // locals.varo = varo;
  varo.handle(messageFormat, sum);
};
