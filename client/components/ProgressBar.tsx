import React from 'react';

interface ProgressBarProps {
    left: number
    right: number
    onChange: (e: any) => void
}

const ProgressBar: React.FC<ProgressBarProps> = ({left, right, onChange}) => {
    return (
        <div style={{display: 'flex'}}>
            <input
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div>{left} / {right}</div>
        </div>
    );
};

export default ProgressBar;