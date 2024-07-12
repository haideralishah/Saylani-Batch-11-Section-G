"use client";

import MyButton from "./button"

type HelloWorldTypes = {
    greet: string,
    message: string,
    btnLabel: string,
    handerFunc: () => void;
}

export default function HelloWorld({
    greet,
    message,
    btnLabel,
    handerFunc
}: HelloWorldTypes) {

    return (
        <>
            <h1>{greet}</h1>
            <p>{message}</p>
            <MyButton
                label={btnLabel}
                clickHandler={handerFunc}
            />
        </>
    )
}