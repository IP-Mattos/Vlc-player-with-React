import { Track } from './../../interfaces/types'

interface PlaylistProps {
    tracks: Track[]
}

function Playlist(props: PlaylistProps) {
    return (
        <div className="container">
            {props.tracks.map((track) => (
                <div key={track.id}>
                    <p>
                        {track.artist.name} - {track.title}{' '}
                    </p>
                    <img src={track.artist.picture_big} alt={track.title} />
                    <audio controls>
                        {' '}
                        <source src={track.preview} type="audio/mp3" />{' '}
                    </audio>
                </div>
            ))}
        </div>
    )
}

export default Playlist
