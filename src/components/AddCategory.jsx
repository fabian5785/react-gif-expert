import { useState } from 'react';

//export const AddCategory = ( { setCategory } ) => {
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState('');

    /*const onInputChange = (event) =>{
        console.log(event.target.value);
        setinputValue( event.target.value);
    }
     
    return (
        <input 
            type="text"
            placeholder="Buscar Gifs..."
            value={ inputValue }
            onChange={ (event) => onInputChange(event) }
        />
        
      )*/

    const onInputChange = ({ target }) => {
        //console.log(target.value);
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(inputValue);
        if (inputValue.trim().length <= 1) return;
        //setCategory( categories => [ inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>


    )

}
