import React, { useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [searching, setSearching] = useState(false);
  const [status, setstatus] = useState("");
  const [display, setdisplay] = useState("hidden");

  const handleSearch = async (event) => {
    setSearching(true);
    setBooks([]);
    const query = event.target.value;
    setQuery(query);
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
        );
        setBooks(response.data.docs);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setSearching(false);
      }
    } else {
      setBooks([]);
      setSearching(false);
    }
  };

  const addToBookshelf = (book) => {
    try {
      const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
      localStorage.setItem("bookshelf", JSON.stringify([...bookshelf, book]));
      setstatus("green");
      setdisplay("");
    } catch (error) {
      setstatus("red");
      setdisplay("");
    }
    setTimeout(() => {
      setdisplay("hidden");
    }, 2000);
  };

  return (
    <>
      <p
        className={`fixed ${display} top-2 mx-auto ${
          status === "green" ? "bg-green-400" : "bg-red-400"
        } text-white py-1 px-2 text-center text-sm rounded-md left-0 right-0 w-[20%]`}
      >
        {status === "green" ? "Book added successfully" : "Some error occured"}
      </p>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold py-5 z-0">Search for Books</h1>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Enter book name"
          className="p-1 pl-2 border-2 border-blue-200 rounded-md outline-0 focus:border-blue-500"
        />
        <div className="book-cards flex flex-wrap justify-center m-5">
          <p className="p-2">{searching === true ? "Searching..." : ""}</p>
          {books.map((book) => (
            <BookCard key={book.key} book={book} onAdd={addToBookshelf} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookSearch;
