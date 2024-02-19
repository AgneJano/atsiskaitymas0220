import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LibraryHomePage } from './Library/HomePage';
import { AddNewNewBook } from './Library/RegsiterBook';
import { BookReview } from './Library/BookReview';

function App() {
  return (
    <>
      <Routes>
        <Route path="/homepage" element={<LibraryHomePage />} />
        <Route path="/book-registration" element={<AddNewNewBook />} />
        <Route path="/book-review" element={<BookReview />} />
      </Routes>
    </>
  );
}
export default App;
