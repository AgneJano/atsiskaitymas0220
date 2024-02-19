import { Button, TextField } from '@mui/material';
import { Footer } from './Footer';
import { NavBar } from './NavBar';

export const BookReview = () => {
  return (
    <>
      <NavBar />
      <h1>Write a review about your favorite book</h1>

      <form>
        <TextField label="Vardas:" />
        <TextField label="Book Title:" />
        <TextField label="Review:" />
        <Button type="submit" variant="contained" style={{ backgroundColor: '#607274' }}>
          Submit
        </Button>
      </form>
      <Footer />
    </>
  );
};
