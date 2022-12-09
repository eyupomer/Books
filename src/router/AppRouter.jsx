import { BrowserRouter, Routes, Route } from "react-router-dom";
//? Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Favorite from "../pages/Favorite";
//? Components
import BookDetails from "../components/BookDetails";
import BookList from "../components/BookList";
import { AppProvider } from "../context/Context";

const AppRouter = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/about" element={<About />} />
            <Route path="/bookList" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/favorite" element={<Favorite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default AppRouter;
