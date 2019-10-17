import React from "react";

export default function useLocalStorage(initialValue) {
    const [value, setValue] = React.useState(initialValue => {
        return JSON.parse(window.localStorage.getItem("cart")) || initialValue;
    });

    const setLocalStorage = value => {
        setValue(value);
        window.localStorage.setItem("cart", JSON.stringify(value));
    };

    return [value, setLocalStorage];
}