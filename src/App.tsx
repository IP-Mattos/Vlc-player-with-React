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
} from './components/styles'

function App() {
    const [query, setQuery] = useState('korn')
    const debouncedValue = useDebounced(query, 300)
    const tracks = useDeezerSearch(debouncedValue)

    function handleChildValue(query: string) {
        setQuery(query)
    }

    return (
        <div className="App">
            <Container>
                <Menu>
                    <Tittle>
                        <h3>
                            <i>Icono</i> Reproductor multimedia VLC
                        </h3>
                    </Tittle>
                    <CloseMenu>
                        <p>-</p>
                        <p>0</p>
                        <p>X</p>
                    </CloseMenu>
                </Menu>
                <Menu>
                    <p>Medio</p>
                    <p>Reproducción</p>
                    <p>Audio</p>
                    <p>Video</p>
                    <p>Subtitulo</p>
                    <p>Herramientas</p>
                    <p>Ver</p>
                    <p>Ayuda</p>
                </Menu>
                <hr />
                <Content>
                    <Searchbar onValueChange={handleChildValue} />

                    <Playlist tracks={tracks} />
                </Content>
            </Container>
        </div>
    )
}

export default App
