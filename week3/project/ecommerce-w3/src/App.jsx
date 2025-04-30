import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Category from './components/Category';
import CategoryProducts from './components/CategoryProduct';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import SingleProduct from './components/SingleProduct';
import Favorites from './components/Favorites';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Categories />} />
        <Route path="category" element={<Category />} />
        <Route path="category/:category" element={<CategoryProducts />} />
        <Route path="categories/product/:id" element={<SingleProduct />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
