import { useState } from 'react'
import useDeezerSearch from './custom/useDeezerSearch'
import useDebounced from './custom/useDebounced'
import Searchbar from './components/Searchbar/Searchbar'
import Playlist from './components/Playlist/Playlist'
import {
    Container,
    CloseMenu,
    Tittle,
    Menu,
    Content,
    SecondMenu,
} from './components/styles'

function App() {
    const [query, setQuery] = useState('korn')
    const [artist, setArtist] = useState('')
    const debouncedValue = useDebounced(query, 300)
    const tracks = useDeezerSearch(debouncedValue)

    function handleChildValue(query: string) {
        setQuery(query)
    }
    function handleArtistChange(artist: string) {
        setArtist(artist + ' -')
    }
    return (
        <div className="App">
            <Container>
                <Menu>
                    <Tittle>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e6/VLC_Icon.svg"
                            alt="icono vlc"
                        />
                        <p>{artist} Reproductor multimedia VLC</p>
                    </Tittle>
                    <CloseMenu>
                        <p>−</p>
                        <p>☐</p>
                        <p>⤫</p>
                    </CloseMenu>
                </Menu>
                <SecondMenu>
                    <Searchbar onValueChange={handleChildValue} />
                    <p>
                        <u>M</u>edio
                    </p>
                    <p>
                        <u>R</u>eproducción
                    </p>
                    <p>
                        <u>A</u>udio
                    </p>
                    <p>
                        <u>V</u>ideo
                    </p>
                    <p>
                        Subti<u>t</u>ulo
                    </p>
                    <p>
                        Herramienta<u>s</u>
                    </p>
                    <p>
                        V<u>e</u>r
                    </p>
                    <p>
                        A<u>y</u>uda
                    </p>
                </SecondMenu>
                <Content>
                    <Playlist
                        tracks={tracks}
                        onArtistChange={handleArtistChange}
                    />
                </Content>
            </Container>
        </div>
    )
}

export default App
