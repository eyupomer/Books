import {Outlet} from "react-router-dom";
//? Components
import BookList from "../components/BookList";

const Home = () => {
  return (
    <main>
      <BookList/>
      <Outlet />
    </main>
  )
}

export default Home