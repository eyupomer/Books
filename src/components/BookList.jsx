import { useGlobalContext } from "../context/Context";
import Loading from "./Loader";
import coverImg from "../images/cover_not_found.jpg";
import Book from "./Book";

// https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  return (
    <div className="py-8 bg-[#f8d0db]">
      <div className="max-w-[1200px] mx-auto flex flex-col text-center px-5">
        <div className="font-[600] uppercase pt-4 pb-6">
          <h2 className="text-purplecolor text-xl tracking-wider">En Çok Okunanlar</h2>
          <hr />
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            booksWithCovers.slice(0, 50).map((item, index) => {
              return (
                <Book key={index} {...item} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default BookList