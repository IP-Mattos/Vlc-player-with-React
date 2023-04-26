import React from 'react'
import formatTime from '../../utils/format'
import { Volumen, BoxVolume, Percent } from '../styles'

interface AudioControlsProps {
    currentTime: number
    duration: number
    volume: number
    isPlaying: boolean
    onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onPlayPause: () => void
    onProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AudioControls: React.FC<AudioControlsProps> = (props) => {
    const {
        currentTime,
        duration,
        volume,
        isPlaying,
        onVolumeChange,
        onPlayPause,
        onProgressChange,
    } = props

    return (
        <div>
            <span>{formatTime(Math.floor(currentTime))}</span>
            <button onClick={onPlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <input
                className="progress"
                type="range"
                min={0}
                max={duration}
                step={0.01}
                value={currentTime}
                onChange={onProgressChange}
            />
            <Percent>{volume * 100} %</Percent>
            <BoxVolume>
                <Volumen volume={volume}>
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.1}
                        value={volume}
                        onChange={onVolumeChange}
                    />
                </Volumen>
            </BoxVolume>
            <span>{formatTime(Math.floor(duration))}</span>
        </div>
    )
}

export default AudioControls
