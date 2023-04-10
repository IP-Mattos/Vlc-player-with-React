import { useState } from 'react'
import { Track } from './../../interfaces/types'
import Player from '../Player/Player'
import convert from './../../utils/convert'
interface PlaylistProps {
    tracks: Track[]
}

function Playlist(props: PlaylistProps) {
    const [song, setSong] = useState('')
    const [img, setImg] = useState('')
    const play = (track: Track) => {
        const picture = track.artist.picture_big
        const song = track.preview
        setImg(picture)
        setSong(song)
    }

    return (
        <div className="container">
            <Player src={song} img={img} />
            {props.tracks.map((track) => (
                <div key={track.id} onClick={() => play(track)}>
                    <p>
                        {track.artist.name} - {track.title} :{' '}
                        {convert(track.duration)}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Playlist
