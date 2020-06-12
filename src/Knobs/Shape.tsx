import React from 'react';

import UndertideAudioContext from '../Shell/UndertideAudioContext';
import OscillatorContext from '../KnobGrid/OscillatorContext';

const Shape = () => {
    const oscillator = React.useContext(OscillatorContext);

    const [shapeState, updateShapeState] = React.useState<OscillatorType>("sine");

    const onShapeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const oscType = e.target.value as OscillatorType;
        updateShapeState(oscType);
        oscillator.type = oscType;
    };

    const oscillatorShapes: OscillatorType[] = ['sine', 'square', 'sawtooth', 'triangle'];

    return (
        <div>
            <div>Shape</div>
            {oscillatorShapes.map((shape) => (
                <div>
                    <input 
                        type="radio" 
                        value={shape} 
                        onChange={onShapeChange}
                        checked={shapeState === shape}
                    />
                    {shape}
                </div>
            ))}
        </div>
    );
};

export default Shape;