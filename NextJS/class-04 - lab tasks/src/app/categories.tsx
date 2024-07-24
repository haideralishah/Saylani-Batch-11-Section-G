"use client"

export default function Categories() {

    const selectCategory = (categoryName: string) => {
        console.log(categoryName);
    }

    return (
        <>
            <button onClick={() => { selectCategory("Cars") }}>Cars</button>
            <button onClick={() => { selectCategory("Gadgets") }}>Gadgets</button>
            <button onClick={() => { selectCategory("Mobiles") }}>Mobiles</button>
            <button onClick={() => { selectCategory("Cloths") }}>Cloths</button>
        </>
    )
}