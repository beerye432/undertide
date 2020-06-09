import React from 'react';

import UndertideAudioContext from './UndertideAudioContext';

import './App.css';
import KnobGrid from "../KnobGrid/KnobGrid";
import PlayPause from "../PlayPause/PlayPause";

export const App = () => {

  const mainAudioContext = new AudioContext();
  const masterGain = mainAudioContext.createGain();
  masterGain.connect(mainAudioContext.destination);

  const undertideAudioContext = {
    mainAudioContext: mainAudioContext,
    masterGain: masterGain,
  };

  return (
    <UndertideAudioContext.Provider value={undertideAudioContext}>
      <div className="App">
        <header className="App-header">
          <KnobGrid />
          <PlayPause />
        </header>
      </div>
    </UndertideAudioContext.Provider>
  );
};