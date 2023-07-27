import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid  } from "./components/GifGrid"; 

//import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";

export const GifExpertApp = () => {
const [categories, setCategories] = useState([ ]);

 const onAddCategory = ( newCategory ) => {

    if ( categories.includes( newCategory ) ) return;

    setCategories ([...categories, newCategory]);
} 

  return (
    <>
        <h1> GifExpertApp </h1>

        <AddCategory onNewCategory = { event => onAddCategory (event)}

        />

        {/* <button onClick={ onAddCategory }>Agregar</button> */}

            {categories.map( category =>{
                return (<GifGrid key={ category}
                                  category={ category }/>)
            } )}



    </>
  )
}


//jBm6U6IkGGxUAiWv1Q9xwTjRAtz1doUP