import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const NavBar = () => {
  return (
    <div>
      <nav
        style={{
          backgroundColor: '#B2A59B',
          padding: '70px 50px',
          display: 'flex',
          msFlexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button variant="contained" style={{ backgroundColor: '#607274' }}>
          <Link
            to="/homepage"
            style={{
              textDecoration: 'none',
              color: '#DED0B6',
              fontSize: '20px',
            }}
          >
            Home page
          </Link>
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: '#607274',
            padding: '20px 40px',
          }}
        >
          <Link
            to="/book-registration"
            style={{
              textDecoration: 'none',
              color: '#DED0B6',
              fontSize: '20px',
            }}
          >
            Register a new book
          </Link>
        </Button>
        <Button variant="contained" style={{ backgroundColor: '#607274' }}>
          <Link
            to="/book-review"
            style={{
              textDecoration: 'none',
              color: '#DED0B6',
              fontSize: '20px',
            }}
          >
            Write a review
          </Link>
        </Button>
      </nav>
    </div>
  );
};
