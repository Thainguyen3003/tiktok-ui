import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [useDebounceValue, setUseDebounceValue] = useState(value);
    useEffect(() => {
        const hander = setTimeout(() => setUseDebounceValue(value), delay);

        return () => clearTimeout(hander);
    }, [value]);

    return useDebounceValue;
}

export default useDebounce;
