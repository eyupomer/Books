//? Components
import SearchForm from "./SearchForm";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-center bg-cover bg-no-repeat">
      <header>
        <Navbar />
        <div className="bg-headerimg min-h-[550px] flex flex-col justify-center items-center text-whitecolor ">
          <h2 className="text-2xl font-bold capitalize">Lorem ipsum dolor sit amet.</h2>
          <br />
          <p className="mb-7 w-3/4 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione consequatur asperiores ipsa? Voluptatem nam necessitatibus accusamus quia odit assumenda! Debitis quia magni doloremque neque consequuntur!</p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header