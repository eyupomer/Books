import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const Book = (book) => {
  const addToFavorite = () => {
  };

  return (
    <div className="py-7 px-5 flex flex-col rounded-md bg-whitecolor shadow-md shadow-black-20 transition-all duration-300 ease-in-out">
      <Link
        
        to={`/book/${book.id}`}
        {...book}
      >
        <div>
          <img
            className="max-w-[120px] md:max-w-[180px] h-[150px] md:h-[200px] mx-auto"
            src={book.cover_img}
            alt="book logo"
          />
        </div>
      </Link>
      <div className="mt-5 flex flex-col items-center space-y-2">
        <div className="mb-1 font-[700] text-lg">
          <span>{book.title}</span>
        </div>

        <div>
          <span className="mb-1 font-bold">Yazar: </span>
          <span className="opacity-70">{book.author}</span>
        </div>
        <div>
          <span className="font-bold">Baskı: </span>
          <span className="opacity-70">{book.edition_count}</span>
        </div>
        <div className="italic">
          <span className="font-bold">İlk Yayın Yılı: </span>
          <span className="opacity-70">{book.first_publish_year}</span>
        </div>
        <div>
          <button onClick={addToFavorite} className="group hover:bg-purplecolor flex space-x-2 items-center justify-center border-2 border-purplecolor rounded-md px-3 py-1 transition-all duration-300 ease-in-out">
            <span className="text-purplecolor group-hover:text-whitecolor transition-all duration-300 ease-in-out ">
              Favorilerime Ekle
            </span>
            <AiOutlineHeart
              size={24}
              className="text-purplecolor group-hover:text-whitecolor transition-all duration-300 ease-in-out"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
