import { useState } from 'react';
//import { AddCategory } from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //console.log('inicio');
        //setCategories([...categories,'Valorant']);
        //setCategories( categories => [...categories, 'Valorant']);
        if (categories.includes(newCategory)) return;
        setCategories(categories => [newCategory, ...categories]);
        //console.log('Fin');
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/*  Input */}
            <AddCategory
                //setCategory={ setCategories}
                //onNewCategory={(value)=>onAddCategory(value)}
                onNewCategory={onAddCategory}
            />
            {/*  Listado de Gif*/}


            {
                categories.map((category) => (
                    <GifGrid key={category}
                        category={category}
                    />
                ))
            }

            {/* Gif Item*/}

        </>
    )
}
