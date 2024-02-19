import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BookCard } from './BookCard';

export const LibraryHomePage = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios
      .get(`https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books`)
      .then((response) => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="gradient-background">
      <NavBar />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {books !== null && books.map((book) => <BookCard key={book.title} {...book} />)};
      </div>
      <Footer />
    </div>
  );
};
