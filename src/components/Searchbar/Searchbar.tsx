import { useState } from 'react'
import { ChildProps } from '../../interfaces/types'
import { Searchbar } from '../styles'

function ChildComponent({ onValueChange }: ChildProps) {
    const [query, setQuery] = useState('asddasd')

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const query = e.target.value
        setQuery(query)
        onValueChange(query)
    }

    return (
        <Searchbar>
            <input
                type="text"
                name=""
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
            />
            🔍︎
        </Searchbar>
    )
}

export default ChildComponent
