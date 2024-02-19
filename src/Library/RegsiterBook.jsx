import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export const AddNewNewBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    category: '',
    price: '',
    cover: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleFormChange = (e) => {
    setBookData((prevFormData) => ({ ...prevFormData, [e.target.name]: e.target.value }));
    if (e.target.name === 'title' && e.target.value.length < 1) {
      setErrorMessage('Empty title');
    } else if (e.target.name === 'author' && e.target.value.length < 2) {
      setErrorMessage('Empty author.');
    } else if (e.target.name === 'category' && e.target.value.length < 4) {
      setErrorMessage('Empty category.');
    } else if (e.target.name === 'price' && e.target.value.length < 1) {
      setErrorMessage('Incorrect price');
    } else if (e.target.name === 'cover' && e.target.value.length < 8) {
      setErrorMessage('Incorrect cover link');
    } else {
      setErrorMessage('');
    }
  };

  const [bookList, setBookList] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books', bookData).then((response) => {
      console.log(response);
      setBookList([...bookList, response.data]);
    });
  };

  let navigate = useNavigate();

  return (
    <>
      <NavBar />
      <form
        onSubmit={handleFormSubmit}
        className="gradient-background"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField
          label="Title"
          variant="outlined"
          name="title"
          value={bookData.title}
          required
          onChange={handleFormChange}
        />
        <TextField label="Author" name="author" value={bookData.author} required onChange={handleFormChange} />
        <TextField label="Category" name="category" value={bookData.category} required onChange={handleFormChange} />
        <TextField
          label="Price"
          type="number"
          name="price"
          value={bookData.price}
          required
          onChange={handleFormChange}
        />
        <TextField label="Cover (Link)" name="cover" value={bookData.cover} required onChange={handleFormChange} />
        <p>{errorMessage}</p>
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: '#b52170' }}
          onClick={() => {
            navigate(`/homepage`);
          }}
        >
          Submit
        </Button>
      </form>
      <Footer />
    </>
  );
};
