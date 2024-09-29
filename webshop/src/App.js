import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar.jsx"
import HomePage from "./pages/global/HomePage.jsx"
import {ContactUs} from "./pages/global/ContactUs.jsx"
import Shops from "./pages/global/Shops.jsx"
import Cart from "./pages/global/Cart.jsx"
import SingleProduct from "./pages/global/SingleProduct.jsx"
import NotFound from "./pages/global/NotFound.jsx"
import AddProduct from "./pages/admin/AddProduct.jsx"
import AdminHome from "./pages/admin/AdminHome.jsx"
import EditProduct from "./pages/admin/EditProduct.jsx"
import MaintainCategories from "./pages/admin/MaintainCategories.jsx"
import MaintainProducts from "./pages/admin/MaintainProducts.jsx"
import MaintainShops from "./pages/admin/MaintainShops.jsx"
import Login from "./pages/auth/Login.jsx"
import Signup from "./pages/auth/Signup.jsx"
import EditCategory from './pages/admin/EditCategory.jsx';
import Supplier from './pages/admin/Supplier.jsx';
import BookSupplier from './pages/admin/BookSupplier.jsx';


function App() {
  
  return (
    <div className="App">
      <NavigationBar/>

      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="contact" element={<ContactUs/>}/>
        <Route path="shop" element={<Navigate to="/shops" />}/>
        <Route path="shops" element={<Shops/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="product/:id" element={<SingleProduct/>}/>

        <Route path="admin" element={<AdminHome/>}/>
        <Route path="admin/add-product" element={<AddProduct/>}/>
        <Route path="admin/edit-product/:id" element={<EditProduct/>}/>
        <Route path="admin/edit-category/:index" element={<EditCategory/>}/>

        <Route path="admin/maintain-products" element={<MaintainProducts/>}/>
        <Route path="admin/maintain-categories" element={<MaintainCategories/>}/>
        <Route path="admin/maintain-shops" element={<MaintainShops/>}/>

        <Route path="admin/supplier" element={<Supplier/>}/>
        <Route path="admin/book-supplier" element={<BookSupplier/>}/>



        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

// 15. 20.august

// HomePage.css --> mooduliks
// kõik CSS kaustast --> mooduliks

// MUI nuppe lisada
// muid MUI componente katsetada

// Pildid andmebaasi
// 1. config faili uus tabel  andmebaasi_aadress/images.json
// 2. uus leht MaintainImages.jsx   URL, nupp kuidas sattuda
// 3. Shopide ja Kategooriate järgi lisamine, kustutamine, kuvamine
//    {url: "", alt="", header: "", text: ""}
// 4x ref, 4x input, 
// 4. CarouselGallery.jsx: väljakuvamine
//    Map.jsx Shops.jsx failide järgi
// andmebaasist võtta. teha .map(üks_pilt_andmebaasist => 
//   <Carousel.Item>
//   <img
//     src="https://picsum.photos/id/230/500/200"
//     alt="First slide"
//   />
//   <Carousel.Caption>
//     <h5>First slide label</h5>
//     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//   </Carousel.Caption>
// </Carousel.Item>
//)

// 16. E 26.august
// 17. E 2.september

// 04.09

// Allkirjaleht: 02.09 4ak/h   04.09  2ak/h
// R 06.09 --->  8.50-9.20  TWN proovitoo.twn.ee  
// R 13.09 --->  8.50-9.20  Lõputöö osa 1
// R 20.09 ---> lõpuprojekti lõplik näitamine   9.00-10.30
