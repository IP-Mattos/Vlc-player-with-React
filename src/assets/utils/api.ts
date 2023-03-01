import { SearchResponse } from '../interfaces/types'

const API_KEY = 'af1a327275mshdd5aa918ac83eecp1f4d95jsnc0d3891a8089'
const API_HOST = 'deezerdevs-deezer.p.rapidapi.com'

export const searchTracks = async (query: string): Promise<SearchResponse> => {
    const options: RequestInit = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST,
        },
    }
    const response: Response = await fetch(
        `https://${API_HOST}/search?q=${query}`,
        options
    )
    return response.json()
}
