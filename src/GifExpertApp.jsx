import { useState }from 'react';
import { AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
      if ( categories.includes(newCategory)) return;


      console.log(newCategory);
      setCategories([newCategory, ...categories]);
    }


  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory 
    onNewCategory={ (event) => onAddCategory( event) }
    />

    <button onClick={ onAddCategory }> Agregar </button>
  
      { categories.map( (category)=> (
          <GifGrid 
          key= { category}
          category={ category} />
          ))
      }

    </>
  )
}
