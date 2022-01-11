import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);
    // const handleAdd = () => {
    //     //setCategories([...categories, 'Hunter']);
    //     setCategories( cats => [...cats, 'Hunter']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= {setCategories }/>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category}</li>
                    })
                }
            </ol>
        </div>
    )
}
