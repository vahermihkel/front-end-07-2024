import React from 'react'
// import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

//function SortButtons({products, setProducts}) {
function SortButtons(props) {
  // const { t } = useTranslation();


  const sortAZ = () => {
    props.products.sort((a,b) => a.title.localeCompare(b.title))
    props.setProducts(props.products.slice())
  }
  const sortZA = () => {
    props.products.sort((a,b) => b.title.localeCompare(a.title))
    props.setProducts(props.products.slice())
  }
  const sortPriceAZ = () => {
    props.products.sort((a,b) => a.price - b.price)
    props.setProducts(props.products.slice())
  }
  const sortPriceZA = () => {
    props.products.sort((a,b) => b.price - a.price)
    props.setProducts(props.products.slice())
  }
  const sortRatingAZ = () => {
    props.products.sort((a,b) => a.rating.rate - b.rating.rate)
    props.setProducts(props.products.slice())
  }
  const sortRatingZA = () => {
    props.products.sort((a,b) => b.rating.rate - a.rating.rate)
    props.setProducts(props.products.slice())
  }

  return (
    <div>
        <Button onClick={sortAZ}>Sort from A to Z</Button>
        <Button onClick={sortZA}>Sort from Z to A</Button>
        <Button onClick={sortPriceAZ}>Sort price accending</Button>
        <Button onClick={sortPriceZA}>Sort price deccending</Button>
        <Button onClick={sortRatingAZ}>Sort rating accending</Button>
        <Button onClick={sortRatingZA}>Sort rating deccending </Button>
    </div>
  )
}

export default SortButtons