"use client";

type MyButtonTypes = {
    label: string,
    clickHandler: () => void;
}

export default function MyButton({ label, clickHandler }: MyButtonTypes) {
    // const eventHandler = () => {
    //     console.log('this is event handler')
    // }
    // return <button onClick={eventHandler}>{label}</button>

    return <button onClick={clickHandler}>{label}</button>
}