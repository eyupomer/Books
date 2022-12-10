import { AppProvider } from "../context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//? Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Favorite from "../pages/Favorite";
import Contact from "../pages/Contact";
import Author from "../pages/Author";
//? Components
import BookDetails from "../components/BookDetails";
import BookList from "../components/BookList";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <AppProvider>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
            <Route path="/bookList" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/author" element={<Author />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </AppProvider>
  );
};

export default AppRouter;
