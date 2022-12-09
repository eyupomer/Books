import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loader";
import coverImg from "../images/cover_not_found.jpg";
import { FaArrowLeft } from "react-icons/fa";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value
              : "Açıklama bulunamadı.",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "Yayınlanan yer bulunamadı.",
            subject_times: subject_times ? subject_times.join(", ") : "Yayın zamanı bulunamadı.",
            subjects: subjects ? subjects.join(", ") : "Konu bulunamadı.",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);
  
  if (loading) return <Loading />;

  return (
    <div className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <button className="flex space-x-3 items-center ml-5 my-6 transition-all duration-300 ease-in-out hover:text-purplecolor" type="button" onClick={() => navigate("/bookList")}>
          {" "}
          <FaArrowLeft size={22} />
          <span className="text-lg font-semibold">Geri Dön</span>
        </button>
        <div className="grid md:grid-cols-2 md:pl-5 md:pr-15 md:py-5 gap-4">
          <div className="max-h-full overflow-hidden">
            <img className="w-full md:max-w-full block h-full object-cover mx-auto" src={book?.cover_img} alt="cover img" />
          </div>
          <div className="scrollbar scrollbar-track-purple-400 scrollbar-thumb-purplecolor max-h-[600px] p-3 flex flex-col space-y-3 ">
            <div>
              <span className="font-semibold text-2xl">{book?.title}</span>
            </div>
            <div>
              <span className="opacity-70">{book?.description}</span>
            </div>
            <div>
              <span className="font-semibold">Yayın Yeri: </span>
              <span className="italic">{book?.subject_places}</span>
            </div>
            <div>
              <span className="font-semibold">Yayın Tarihi: </span>
              <span className="italic">{book?.subject_times}</span>
            </div>
            <div>
              <span className="font-semibold">Tür: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
