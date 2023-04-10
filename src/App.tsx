import { useState } from 'react'
import useDeezerSearch from './custom/useDeezerSearch'
import useDebounced from './custom/useDebounced'
import Searchbar from './components/Searchbar/Searchbar'
import './App.css'
import Playlist from './components/Playlist/Playlist'

function App() {
    const [query, setQuery] = useState('korn')
    const debouncedValue = useDebounced(query, 300)
    const tracks = useDeezerSearch(debouncedValue)

    function handleChildValue(query: string) {
        setQuery(query)
    }

    return (
        <div className="App">
            <Searchbar onValueChange={handleChildValue} />

            <Playlist tracks={tracks} />
        </div>
    )
}

export default App
