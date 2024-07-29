"use client"

type CategoryType = {
    categories: string[]
}

export default function Categories({ categories }: CategoryType) {


    const selectCategory = (categoryName: string) => {
        console.log(categoryName);
    }

    return (
        <>
            {
                categories.map((category, i) => (
                    <button key={category + i} onClick={() => { selectCategory(category) }}>
                        {category}
                    </button>
                ))
            }

        </>
    )
}