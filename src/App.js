import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';

function App() {
  return (
    <Router>
      <div>
        <nav className='flex justify-around my-2'>
          <Link to="/" className='py-1 bg-pink-400 rounded-lg px-2 text-white font-semibold hover:bg-pink-500'>Search Books</Link>
          <Link to="/bookshelf" className='py-1 bg-pink-400 rounded-lg px-2 text-white font-semibold hover:bg-pink-500'>My Bookshelf</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BookSearch />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
