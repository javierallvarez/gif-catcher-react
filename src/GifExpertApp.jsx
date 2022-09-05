import React, { useState } from 'react';
import { CategoryForm, GifGrid, ScrollUp } from './components'
import { Footer } from './components/Footer';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Modern surrealism']);


    /**
     * If the category does not exist, return nothing. If the category does exist, add it to the list
     * of categories
     * @returns the new value of the categories array.
     */
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) {
            return
        }
        setCategories( [ newCategory, ...categories ] )
    }


    return (
        <>  
            <header>
                <a href='#'>
                    <h1>GIF<span>CATCHER</span></h1>
                </a>
                <nav>
                    <a href='#'>Featured Gifs</a>
                    <a href='#'>Trendy Gifs</a>
                    <a href='#'>Art Gifs</a>
                    <a href='#'>Contact</a>
                </nav>
                <CategoryForm onAddCategory={ onAddCategory }></CategoryForm> 

            </header>

            {/* We send category as a prop to the child component, GifGrid: */}
            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                        />
                ))
            }
            <ScrollUp/>
            <Footer/>
        </>
    );
}

export default GifExpertApp;
