import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Categories from '../components/Categories';
import Category from '../components/Category';
import CategoryProducts from '../components/CategoryProducts';
import NotFound from '../components/NotFound';
import Layout from '../components/Layout';
import SingleProduct from '../components/SingleProduct';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />}>
            <Route path="category" element={<Category />} />
            <Route path="category/:category" element={<CategoryProducts />} />

            <Route path="category/:id" element={<SingleProduct />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
