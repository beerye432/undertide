import React from 'react';

import UndertideAudioContext from '../Shell/UndertideAudioContext';
import OscillatorContext from '../KnobGrid/OscillatorContext';

const Frequency = () => {

    const { mainAudioContext } = React.useContext(UndertideAudioContext);
    const oscillator = React.useContext(OscillatorContext);

    const [freqState, updateFreqState] = React.useState(0);

    const onFreqStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const freqNum = Number(e.target.value);

        if (freqNum === 0) {
            updateFreqState(1);
            oscillator.frequency.value = 1;
        }

        if (freqNum) {
            updateFreqState(freqNum);
            oscillator.frequency.value = freqNum;
        }
    };

    return (
        <div>
            <label>
                Frequency
                <input 
                    style={{width: "100%"}}
                    type="number" 
                    value={freqState} 
                    onChange={onFreqStateChange} 
                />
            </label>
        </div>
    );
};

export default Frequency;