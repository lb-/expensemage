import reqwest from 'reqwest';
import R from 'ramda';

const messageFormat = {role: 'submit'};

const parseData = R.curry(function(data) {
  //check data is there
  //check data format
  return JSON.stringify(data);
});

const postDataReqestCors = R.curry(function (success, error, url, data) {
  //not pure as it does not return anything
  reqwest({url, data, success, error,
    type: 'json',
    method: 'post',
    contentType: 'application/json; charset=utf-8',
    crossOrigin: true,
  });
});


const messageHandler = function (msg, done) {
  const myjsonApi = 'https://api.myjson.com/bins';

  const whenDone = R.curry(function (done, msg) {
    done(null, msg);
  });

  const whenError = R.curry(function (done, error) {
    done(error);
  });

  const submitRequest = R.compose(
    postDataReqestCors(whenDone(done), whenError(done), myjsonApi),
    parseData
  );

  //send it to server
  submitRequest(msg.data);
};

export default function (varo) {
  varo.handle(messageFormat, messageHandler);
};
