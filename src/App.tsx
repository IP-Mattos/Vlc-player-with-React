import React from 'react'
import useDeezerSearch from './custom/useDeezerSearch'
import './App.css'

function App() {
    const query = 'korn'
    const tracks = useDeezerSearch(query)
    return (
        <div className="App">
            <div className="container">
                {tracks.map((track) => (
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
        </div>
    )
}

export default App
