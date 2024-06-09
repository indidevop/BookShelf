
import React, { useState, useEffect } from 'react';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);
  

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-xl font-bold py-5'>My Bookshelf</h1>
      <div className='flex flex-wrap justify-center m-5'>
        {bookshelf.map(book => (
          <div key={book.key} className='flex flex-col justify-around border-2 border-gray-600 rounded-lg p-3 m-2
      w-[90%] sm:w-[30%]'>
            <h3><span className='font-semibold'>Title:</span> {book.title}</h3>
            <p><span className='font-semibold'>Author:</span> {book.author_name}</p>
            <p><span className='font-semibold'>Edition Count:</span> {book.edition_count}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Bookshelf;
