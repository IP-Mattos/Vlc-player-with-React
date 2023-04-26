import { useState } from 'react'
import { Track } from './../../interfaces/types'
import Player from '../Player/Player'
import convert from './../../utils/convert'
import { Right, Left, Box } from '../styles'

interface PlaylistProps {
    tracks: Track[]
    onArtistChange: (artist: string) => void
}

function Playlist(props: PlaylistProps) {
    const [song, setSong] = useState('')
    const [img, setImg] = useState(
        'https://upload.wikimedia.org/wikipedia/commons/e/e6/VLC_Icon.svg'
    )
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')

    const play = (track: Track) => {
        const picture = track.artist.picture_big
        const song = track.preview
        const title = track.title
        const artist = track.artist.name
        const name = track.artist.name + ' - ' + track.title

        setImg(picture)
        setSong(song)
        setTitle(title)
        setArtist(artist)
        props.onArtistChange(name)
    }

    return (
        <div>
            <Box>
                <Right>
                    {props.tracks.map((track) => (
                        <div key={track.id} onClick={() => play(track)}>
                            <p>
                                {track.artist.name} - {track.title} :{' '}
                                {convert(track.duration)}
                            </p>
                        </div>
                    ))}
                </Right>
                <Left>
                    <img src={img} alt="band" />
                </Left>
            </Box>

            <Player src={song} img={img} title={title} artist={artist} />
        </div>
    )
}

export default Playlist
