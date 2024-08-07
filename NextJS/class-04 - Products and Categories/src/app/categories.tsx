"use client"

type CategoryType = {
    categories: string[];
    setSelectedCat: (cat: string) => void;
}

export default function Categories({
    categories,
    setSelectedCat
}: CategoryType) {

    return (
        <>
            {
                categories.map((category, i) => (
                    <button
                        key={category + i}
                        onClick={() => { setSelectedCat(category) }}
                    >
                        {category}
                    </button>
                ))
            }

        </>
    )
}