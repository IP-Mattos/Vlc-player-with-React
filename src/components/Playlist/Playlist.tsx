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
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')

    const play = (track: Track) => {
        const picture = track.artist.picture_big
        const song = track.preview
        const title = track.title
        const artist = track.artist.name

        setImg(picture)
        setSong(song)
        setTitle(title)
        setArtist(artist)
    }

    return (
        <div className="container">
            {props.tracks.map((track) => (
                <div key={track.id} onClick={() => play(track)}>
                    <p>
                        {track.artist.name} - {track.title} :{' '}
                        {convert(track.duration)}
                    </p>
                </div>
            ))}
            <Player src={song} img={img} title={title} artist={artist} />
        </div>
    )
}

export default Playlist
