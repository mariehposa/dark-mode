import React, { useEffect } from 'react';
import {UseLocalStorage} from './UseLocalStorage';

export const UseDarkMode = () => {
    const [darkValue, setDarkValue] = UseLocalStorage('value', false);

    useEffect(() => {
        if (darkValue) {
            document.querySelector('body').classList.add('dark-mode')
        }
        else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [darkValue]);

    return [darkValue, setDarkValue];
}