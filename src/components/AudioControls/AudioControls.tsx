import React from 'react'
import formatTime from '../../utils/format'
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
            <input
                type="range"
                min={0}
                max={1}
                step={0.1}
                value={volume}
                onChange={onVolumeChange}
            />
            <button onClick={onPlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <input
                type="range"
                min={0}
                max={duration}
                step={0.01}
                value={currentTime}
                onChange={onProgressChange}
            />
            <span>
                {formatTime(Math.floor(currentTime))} /{' '}
                {formatTime(Math.floor(duration))}
            </span>
        </div>
    )
}

export default AudioControls
