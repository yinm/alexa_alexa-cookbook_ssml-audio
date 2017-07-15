const Alexa = require('alexa-sdk');

exports.handler = (event, context, callback) => {
  const alexa = Alexa.handler(event, context);

  alexa.registerHandlers(handlers);
  alexa.execute();
};

const handlers = {
  'LaunchRequest': function() {
    this.emit('MyIntent');
  },

  'MyIntent': function() {
    const say = "<audio src='" + pickAudioClip() + "' />";
    this.emit(':ask', say, 'try again');
  }
};

function pickAudioClip() {
  const audioSources = [
    'https://s3.amazonaws.com/my-ssml-samples/Flourish.mp3',
    'https://s3.amazonaws.com/my-ssml-samples/cheap_thrills.mp3'
  ];

  const i = Math.floor(Math.random() * audioSources.length);

  return(audioSources[i]);
}
