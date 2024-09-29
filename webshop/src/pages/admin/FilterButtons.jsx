import { Button } from '@mui/material'
import React from 'react'

function FilterButtons(props) {
  
  const filterByCategory = (categoryClicked) => {
    const result = props.dbProducts.filter(p => p.category === categoryClicked)
    props.setProducts(result.slice(0,props.productsPerPage)); // 4
    props.setCategoryProducts(result); // 10
    props.setActivePage(1);
    let items = [];
    for (let number = 1; number <= Math.ceil(result.length / props.productsPerPage); number++) {
      items.push(number);
    }
    props.setPages(items);
  }

  return (
    <Button color="secondary" key={props.category.name} onClick={() => filterByCategory(props.category.name)}>{props.category.name}</Button>
  )
}

export default FilterButtons