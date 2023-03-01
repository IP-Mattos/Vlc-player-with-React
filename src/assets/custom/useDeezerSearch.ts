import { useState, useEffect } from 'react'
import { searchTracks } from '../utils/api'
import { Track } from '../interfaces/types'

const useDeezerSearch = (query: string): Track[] => {
    const [tracks, setTracks] = useState<Track[]>([])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLoading, setIsLoading] = useState<boolean>(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState<Error | unknown>(null)

    useEffect(() => {
        const fetchTracks = async () => {
            setIsLoading(true)
            try {
                const response = await searchTracks(query)
                const newTracks: Track[] = response.data.map((item) => {
                    return {
                        id: item.id,
                        title: item.title,
                        duration: item.duration,
                        preview: item.preview,
                        artist: {
                            id: item.artist.id,
                            name: item.artist.name,
                            picture_big: item.artist.picture_big,
                        },
                    }
                })
                setTracks(newTracks)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchTracks()
    }, [query])

    return tracks
}

export default useDeezerSearch
