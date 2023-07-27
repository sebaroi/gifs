import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        //trim elina los espacios vacions tanto atras o adelante
        if (inputValue.trim().length <= 1) return;
        onNewCategory ( inputValue.trim() )
       // setCategories ( categories => [ inputValue, ...categories]);
        setInputValue('');
    }

  return (
    //<form onSubmit={ onSubmit }>
    <form onSubmit={ (event) => onSubmit (event) }>
            <input type="text" 
            placeholder="Buscar GIFS" 
            value={ inputValue }
            onChange={(event) => onInputChange(event)}
    />

    </form>


  )
}
