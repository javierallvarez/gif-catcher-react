import { useState } from 'react';


// Get onAddCategory from its father's props, GifExpertApp.
// Desestructuring:
export const CategoryForm = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    
    /*  Access to the value that the input receives:
        const onInputChange = (event) => {
        setInputValue( event.target.value )
    }*/

    // The same function but desestructuring:
    const onInputChange = ({ target }) => {
        setInputValue( target.value )
        //console.log(target.value)
    }

    
    /* A function that is called when the user clicks the button or presses ENTER.
    It prevents the default action of the button (which is to refresh the page).
    It checks if the inputValue is empty or has only one letter.
    If it is, it returns nothing.
    If it is not, it sets the inputValue to empty and calls the function onAddCategory. */
    const onSubmtting = (event => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        setInputValue ('')
        onAddCategory(inputValue.trim())
    })


    // Use on Submit also in the form to allow press eEnter to submit:
    return (
        <form onSubmit={ onSubmtting }>
            <input
                type='text'
                placeholder='Find GIFS'
                value={ inputValue }
                onChange={ onInputChange }>
            </input>
            <button onClick={ onSubmtting }>Go!</button>
        </form>        
    );
}


