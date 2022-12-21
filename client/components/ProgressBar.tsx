import React from 'react';

interface TrackProgressProps {
    left: number
    right: number
    onChange: (e: any) => void
}

const ProgressBar: React.FC<TrackProgressProps> = ({left, right, onChange}) => {
    return (
        <div style={{display: 'flex'}}>
            <input
                type="range"
                min={left}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div>{left} / {right}</div>
        </div>
    );
};

export default ProgressBar;