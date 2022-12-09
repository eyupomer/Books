import {Outlet} from "react-router-dom";
//? Components
import Header from "../components/Header";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default Home