import React, { useEffect, useRef } from 'react'

interface AudioPlayerProps {
    src: string
    img: string
}

const Player: React.FC<AudioPlayerProps> = (props) => {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const audio = audioRef.current

        if (audio) {
            audio.volume = 0.1 // Establecer volumen al 50%
            audio.src = props.src // Establecer la fuente del audio
            audio.load()
        }
    }, [props.src])

    return (
        <div className="player">
            {props.src && <p>Now playing: {props.src}</p>}
            <img src={props.img} alt="band" />
            <audio ref={audioRef} controls autoPlay />
        </div>
    )
}

export default Player
