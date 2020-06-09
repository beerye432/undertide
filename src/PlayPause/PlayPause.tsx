import React from 'react';

import UndertideAudioContext from '../Shell/UndertideAudioContext';

const PlayPause = () => {

    const { mainAudioContext, masterGain } = React.useContext(UndertideAudioContext);

    const onPlayClick = () => {
        masterGain.gain.exponentialRampToValueAtTime(1, mainAudioContext.currentTime + 0.1);
    };

    const onPauseClick = () => {
        masterGain.gain.exponentialRampToValueAtTime(0.00001, mainAudioContext.currentTime + 0.1);
    };

    return (
        <div>
            <button onClick={onPlayClick}>Play</button>
            <button onClick={onPauseClick}>Pause</button>
        </div>
    );
};

export default PlayPause;