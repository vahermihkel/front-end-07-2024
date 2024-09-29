import React, {useEffect, useRef, useState} from 'react'
import {Link} from "react-router-dom"
// import categoriesFromFile from "../../data/categories.json"
import config from "../../data/config.json"

function MaintainCategories() {
  const [categories, setCategories] = useState([])
    const categoryRef = useRef()

    useEffect(() => {
      fetch(config.categoriesDbUrl)
        .then(res => res.json())
        .then(json => setCategories(json || []));
    }, []);

    const remove = async (index) => {
      categories.splice(index, 1)
      // HILJEM: Saadame ka andmebaasi
      await fetch(config.categoriesDbUrl, {method: "PUT", body: JSON.stringify(categories)})
      setCategories(categories.slice())
    }

    const addNew = async () => {
      const newCategory =  {
        "name": categoryRef.current.value,
      }
      categories.push(newCategory)
      // HILJEM: Saadame ka andmebaasi
      await fetch(config.categoriesDbUrl, {method: "PUT", body: JSON.stringify(categories)})
      setCategories(categories.slice())
      categoryRef.current.value = "";
    }

  if (categories.length === 0) {
    return "Loading..."
  }

  return (
    <div>
      <label>New category</label><br/>
      <input ref={categoryRef} type="text" /><br/>
      <button onClick={addNew}>Add new</button>
      <br></br>
      <div>Number of categories: {categories.length}tk</div>
        {categories.map((category, index) =>
             <div key={index}>
                {category.name} 
                <button onClick={() => remove(index)}>x</button>
                
                <Link to={"/admin/edit-category/" + index} >
                <button>Change</button>
                </Link>
                </div>)}

    </div>
  )
}

export default MaintainCategories