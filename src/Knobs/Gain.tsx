import React from 'react';

import UndertideAudioContext from '../Shell/UndertideAudioContext';
import OscillatorContext from '../KnobGrid/OscillatorContext';

const Gain = () => {

    const { mainAudioContext } = React.useContext(UndertideAudioContext);
    const oscillator = React.useContext(OscillatorContext);

    const gain = React.useMemo(() => {
        const g = mainAudioContext.createGain();
        console.log("creating new gain");
        g.connect(mainAudioContext.destination);
        g.gain.setValueAtTime(0.0001, mainAudioContext.currentTime);
        oscillator.connect(g);
        return g;
    }, [mainAudioContext, oscillator]);

    const [gainState, updateGainState] = React.useState(0.0);

    const onGainStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const gainNum = Number(e.target.value);

        if (gainNum === 0) {
            updateGainState(0.1);
            gain.gain.exponentialRampToValueAtTime(0.1, mainAudioContext.currentTime + 0.01);
        }

        if (gainNum) {
            updateGainState(gainNum);
            gain.gain.exponentialRampToValueAtTime(gainNum, mainAudioContext.currentTime + 0.01);
        }
    };

    return (
        <div>
            <label>
                Gain
                <input 
                    style={{width: "100%"}}
                    type="number" 
                    step=".1" 
                    value={gainState} 
                    onChange={onGainStateChange} 
                />
            </label>
        </div>
    );
};

export default Gain;