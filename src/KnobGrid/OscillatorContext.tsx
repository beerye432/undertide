import React from 'react';

const OscillatorContext = React.createContext(new OscillatorNode(new AudioContext()));

export default OscillatorContext;