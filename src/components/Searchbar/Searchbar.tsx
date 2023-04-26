import { useState } from 'react'
import { ChildProps } from '../../interfaces/types'

function ChildComponent({ onValueChange }: ChildProps) {
    const [query, setQuery] = useState('Korn')

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const query = e.target.value
        setQuery(query)
        onValueChange(query)
    }

    return (
        <input
            type="text"
            name=""
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
        />
    )
}

export default ChildComponent
