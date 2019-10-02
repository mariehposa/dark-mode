import React from 'react';

const UseLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item 
            ? JSON.parse(item) 
            : initialValue;

    });

    return [storedValue];
}  