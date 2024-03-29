import { useState, useEffect } from 'react'

export default function useDebounced<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [value, delay])

    return debouncedValue
}
