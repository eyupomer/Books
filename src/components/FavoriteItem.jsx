import { AiFillHeart } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/Context";


const FavoriteItem = ({favoriteBook}) => {
  const {favoriteList, setFavoriteList} = useGlobalContext();
  const removeFromFavorite = () => {
    const restOfFavorite = favoriteList.filter(item => item.id !== favoriteBook.id);
    setFavoriteList([...restOfFavorite]);
  };

  return (
    <div className="py-7 px-5 flex flex-col rounded-md bg-whitecolor shadow-md shadow-black-20 transition-all duration-300 ease-in-out">
      <Link
        
        to={`/book/${favoriteBook.id}`}
        {...favoriteBook}
      >
        <div>
          <img
            className="max-w-[120px] md:max-w-[180px] h-[150px] md:h-[200px] mx-auto"
            src={favoriteBook.cover_img}
            alt="Book logo"
          />
        </div>
      </Link>
      <div className="mt-5 flex flex-col items-center space-y-2">
        <div className="mb-1 font-[700] text-lg">
          <span>{favoriteBook.title}</span>
        </div>

        <div>
          <span className="mb-1 font-bold">Yazar: </span>
          <span className="opacity-70">{favoriteBook.author}</span>
        </div>
        <div>
          <span className="font-bold">Baskı: </span>
          <span className="opacity-70">{favoriteBook.edition_count}</span>
        </div>
        <div className="italic">
          <span className="font-bold">İlk Yayın Yılı: </span>
          <span className="opacity-70">{favoriteBook.first_publish_year}</span>
        </div>
        <div>
              <button onClick={removeFromFavorite} className="group hover:bg-purplecolor flex space-x-2 items-center justify-center border-2 border-purplecolor rounded-md px-3 py-1 transition-all duration-300 ease-in-out">
              <span className="text-purplecolor group-hover:text-whitecolor transition-all duration-300 ease-in-out ">
                Favorilerimden Çıkart
              </span>
              <AiFillHeart
                size={24}
                className="text-purplecolor group-hover:text-whitecolor transition-all duration-300 ease-in-out"
              />
            </button>
        </div>
      </div>
    </div>
  )
}

export default FavoriteItem