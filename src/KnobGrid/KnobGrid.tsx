import React from 'react';
import './KnobGrid.css';
import Gain from '../Knobs/Gain';
import Frequency from '../Knobs/Frequency';
import UndertideAudioContext from '../Shell/UndertideAudioContext';
import OscillatorContext from './OscillatorContext';

const KnobGrid = () => {

    const undertideAudioContext = React.useContext(UndertideAudioContext);

    const osc = undertideAudioContext.mainAudioContext.createOscillator();
    osc.connect(undertideAudioContext.masterGain);
    osc.type = "sine";
    osc.frequency.value = 0;
    osc.start(0);

    return (
        <div className="container">
            <OscillatorContext.Provider value={osc}>
                <Gain />
                <Frequency />
            </OscillatorContext.Provider>
        </div>
    );
};

export default KnobGrid;