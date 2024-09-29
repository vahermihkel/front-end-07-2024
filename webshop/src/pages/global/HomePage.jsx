import React, { act, useEffect, useState } from 'react'
//import { useNavigate, useParams} from "react-router-dom"
// import productsFromFile from "../../data/products.json"
// import cart from "../../data/cart.json"
import {ToastContainer} from "react-toastify"
import "../../css/HomePage.css";
// import categoriesFromFile from "../../data/categories.json";
import config from "../../data/config.json";
import SortButtons from '../../components/SortButtons';
import Product from '../../components/Product';
import CarouselGallery from '../../components/CarouselGallery';
import Pagination from 'react-bootstrap/Pagination';
import FilterButtons from '../admin/FilterButtons';

function HomePage() {
  const [products, setProducts] = useState([]) // lk kaupa: max 4
  const [dbProducts, setDbProducts] = useState([]) // andmebaasist: alati 22
  const [categoryProducts, setCategoryProducts] = useState([]); // palju kategoorias: nt 10

  const [categories, setCategories] = useState([])
  const productsPerPage = 2;
  const [pages, setPages] = useState([])
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json.slice(0,productsPerPage)); // välja näitamiseks -> 20, 6, 20, 4, 6, 20
        setDbProducts(json); // originaalse seisu hoidmiseks: 20
        setCategoryProducts(json);
        let items = [];
        // const startPage = 1;
        let endPage = Math.ceil(json.length / productsPerPage);
        if (endPage > 5) {
          endPage = 5;
        }
        // const endPage = 5;
        for (let number = 1; number <= endPage; number++) {
          items.push(number);
        }
        setPages(items);
      })
  }, []);
  
  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json))
  }, []);

  
  // const {index} = useParams()
  // const productRef = useRef()
  // const navigate = useNavigate()
 
  //  const filterByCategory = (categoryClicked) => {
  //   const result = dbProducts.filter(p => p.category === categoryClicked);
  //   setProducts(result);
  //  }

  const reset = () => {
    setCategoryProducts(dbProducts.slice());
    setProducts(dbProducts.slice(0, productsPerPage));
    setActivePage(1);
    let items = [];
    for (let number = 1; number <= Math.ceil(dbProducts.length / productsPerPage); number++) {
      items.push(number);
    }
    setPages(items);
  }

   const changeActivePage = (newPage) => {
    setActivePage(newPage);
    setProducts(categoryProducts.slice(newPage * productsPerPage - productsPerPage,newPage * productsPerPage));
    let items = [];
    let startPage = newPage - 2;
    let endPage = newPage + 2;

    if (newPage === 2 || newPage === 1) {
      startPage = 1;
      endPage = 5;
    }
    
    const totalPages = Math.ceil(dbProducts.length / productsPerPage);
    if (newPage >= totalPages - 2) {
      startPage = totalPages - 4;
      endPage = totalPages;
    }


    for (let number = startPage; number <= endPage; number++) {
      items.push(number);
    }
    setPages(items);
   }

   const previousPage = () => {
    if (activePage > 1) {
      // setActivePage(activePage - 1);
      changeActivePage(activePage-1);
    }
   }

   const nextPage = () => {
    if (activePage < pages[pages.length-1]) {
      // setActivePage(activePage + 1);
      changeActivePage(activePage+1);
    }
   }
  
  return (
    <div>
      <CarouselGallery />

      <div>Total products: {categoryProducts.length} pcs</div>
      <SortButtons
        products={products}
        setProducts={setProducts}
      />

      <br /><br />

      {/* FILTER BUTTONS --> kodus */}
      <button onClick={reset}>Reset filters</button>
      {categories.map((category, index) =>
        <FilterButtons
        dbProducts={dbProducts}
        setProducts={setProducts}
        category={category} 
        productsPerPage={productsPerPage}
        setCategoryProducts={setCategoryProducts}
        setActivePage={setActivePage}    
        setPages={setPages}    
        key={index}
        />
      )}

      <br /><br />

      <div className="products">
        {products.map((product, index) =>
          <Product product={product} key={index} />
        )}
      </div>

      <Pagination>
        <Pagination.Item onClick={previousPage}> <img className="lang" src="/previous.png" alt="" /> </Pagination.Item>
        {pages.map(page => 
        <Pagination.Item key={page} active={page === activePage} onClick={() => changeActivePage(page)}>
          {page}
        </Pagination.Item>
        )}
        <Pagination.Item onClick={nextPage}> <img className="lang" src="/next.png" alt="" /> </Pagination.Item>
      </Pagination>
      

      <ToastContainer/>
    </div>
  )
}

export default HomePage