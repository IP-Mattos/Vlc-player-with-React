// AudioPlayer.tsx

import React, { useEffect, useRef, useState } from 'react'
import AudioControls from '../AudioControls/AudioControls'

interface AudioPlayerProps {
    src: string
    img: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = (props) => {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [volume, setVolume] = useState<number>(0.1)
    const [isPlaying, setPlaying] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0)

    useEffect(() => {
        const audio = audioRef.current

        if (audio) {
            audio.volume = volume
            audio.src = props.src
            if (isPlaying) {
                audio.play()
            } else {
                audio.pause()
            }
        }
    }, [props.src, isPlaying, volume])

    useEffect(() => {
        const audio = audioRef.current

        if (audio) {
            audio.addEventListener('timeupdate', handleTimeUpdate)
            audio.addEventListener('loadedmetadata', handleLoadedMetadata)
            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate)
                audio.removeEventListener(
                    'loadedmetadata',
                    handleLoadedMetadata
                )
            }
        }
    }, [])

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const volumeValue = parseFloat(e.target.value)
        setVolume(volumeValue)
        const audio = audioRef.current
        if (audio) {
            audio.volume = volumeValue
        }
    }

    const handlePlayPause = () => {
        setPlaying(!isPlaying)
    }

    const handleTimeUpdate = (e: Event) => {
        const audio = e.target as HTMLAudioElement
        setCurrentTime(audio.currentTime)
    }

    const handleLoadedMetadata = (e: Event) => {
        const audio = e.target as HTMLAudioElement
        setDuration(audio.duration)
    }

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const progressValue = parseFloat(e.target.value)
        const audio = audioRef.current
        if (audio) {
            audio.currentTime = progressValue
            setCurrentTime(progressValue)
        }
    }

    return (
        <div className="player">
            {props.src && <p>Now playing: {props.src}</p>}
            <img src={props.img} alt="band" />
            <AudioControls
                volume={volume}
                isPlaying={isPlaying}
                currentTime={currentTime}
                duration={duration}
                onVolumeChange={handleVolumeChange}
                onPlayPause={handlePlayPause}
                onProgressChange={handleProgressChange}
            />
            <audio ref={audioRef} autoPlay />
        </div>
    )
}

export default AudioPlayer
