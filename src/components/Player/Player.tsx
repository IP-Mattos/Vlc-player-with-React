import React, { useEffect, useRef, useState } from 'react'
import AudioControls from '../AudioControls/AudioControls'
import { Control } from '../styles'

interface AudioPlayerProps {
    src: string
    img: string
    title: string
    artist: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = (props) => {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [volume, setVolume] = useState<number>(0.1)
    const [isPlaying, setPlaying] = useState<boolean>(true)
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
    }, [props.src, isPlaying])

    useEffect(() => {
        const audio = audioRef.current

        if (audio) {
            audio.addEventListener('timeupdate', handleTimeUpdate)
            audio.addEventListener('loadedmetadata', handleLoadedMetadata)
            setPlaying(true)
            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate)
                audio.removeEventListener(
                    'loadedmetadata',
                    handleLoadedMetadata
                )
            }
        }
    }, [props.src])

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
        <Control>
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
        </Control>
    )
}

export default AudioPlayer
