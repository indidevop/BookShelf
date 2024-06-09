import React from "react";

const BookCard = ({ book, onAdd }) => {
  return (
    <div
      key={book.key}
      className="flex flex-col justify-around border-2 border-gray-600 rounded-lg p-3 m-3
      w-[90%] sm:w-[30%]"
    >
      <h3>
        <span className="font-semibold">Title:</span> {book.title}
      </h3>
      <p>
        <span className="font-semibold">Author:</span> {book.author_name}
      </p>
      <p>
        <span className="font-semibold">Edition Count:</span>{" "}
        {book.edition_count}
      </p>
      <button onClick={() => onAdd(book)} className="w-[70%] lg:w-[50%] bg-blue-400 text-white font-semibold px-1 rounded-md hover:bg-blue-500 mx-auto my-3">Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
