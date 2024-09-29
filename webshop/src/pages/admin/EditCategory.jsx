import React, {useEffect, useRef, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import categoriesFromFile from "../../data/categories.json"
import config from "../../data/config.json";

function EditCategory() {
  const {index} = useParams()
  const [categories, setCategories] = useState([]);
  const found = categories[index]
  const categoryRef = useRef();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => {
        setCategories(json);
        setLoading(false);
      })
  }, []);
  
  const edit = async () => {
    categories[index] =  {
      "name": (categoryRef.current.value),
    }
    await fetch(config.categoriesDbUrl, {method: "PUT", body: JSON.stringify(categories)})
    navigate("/admin/maintain-categories");
  }

  if (loading === true) {
    return <div>Loading...</div>
  }

  if (found === undefined) {
    return <div>Category not found</div>
  }

  return (
    <div>
        <label>Category:</label> <br/>
        <input type="text" ref={categoryRef} defaultValue={found.name}/><br/>
        <button onClick={edit}>Change</button>
    </div>
  )
}

export default EditCategory