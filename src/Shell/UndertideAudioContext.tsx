import React from 'react';

const mainAudioContext = new AudioContext();
const masterGain = mainAudioContext.createGain();
masterGain.connect(mainAudioContext.destination);

const UndertideAudioContext = React.createContext({
    mainAudioContext: mainAudioContext,
    masterGain: masterGain,
});

export default UndertideAudioContext;