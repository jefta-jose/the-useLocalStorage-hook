import { useState, useEffect } from 'react';

// LocalStorage Operations
//inserting data into local storage
// -  localStorage.setItem('name', 'mario');
// getting data from local storage
// -  localStorage.getItem('name');
//clear all data from local storage
// -  localStorage.clear();


function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = window.localStorage.getItem(key); //get value from local storage
        return jsonValue ? JSON.parse(jsonValue) : initialValue; //if value is present then parse it else return initial value
    });

    // set value to local storage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    // clear value from local storage
    const clear = () => localStorage.removeItem(key);

    return [value, setValue, clear];
}
export default useLocalStorage;