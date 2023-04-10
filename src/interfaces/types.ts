export interface Track {
    id: number
    title: string
    preview: string
    artist: {
        id: number
        name: string
        picture_big: string
    }
}

export interface SearchResponse {
    data: {
        id: number
        title: string
        duration: number
        link: string
        preview: string
        artist: {
            id: number
            name: string
            picture_big: string
        }
        album: {
            id: number
            title: string
            cover: string
        }
    }[]
}

export interface ChildProps {
    onValueChange: (newValue: string) => void
}
