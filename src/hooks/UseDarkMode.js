import React, { useEffect } from 'react';
import {UseLocalStorage} from './UseLocalStorage';

const UseDarkMode = () => {
    const [darkValue, setDarkValue] = UseLocalStorage('value', false);

    useEffect(() => {
        if (darkValue) {
            document.querySelector('body').classList.add('value')
        }
        else {
            document.querySelector('body').classList.remove('value')
        }
    }, [value]);

    return [darkValue, setDarkValue];
}