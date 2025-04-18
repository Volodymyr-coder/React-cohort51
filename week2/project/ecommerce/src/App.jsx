import { Link, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Categories from '../components/Categories';
import Category from '../components/Category';
import NotFound from '../components/NotFound';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Categories">Categories</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />}>
          <Route path="Category" element={<Category />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
