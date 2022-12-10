import React, { useRef, useEffect } from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/Context';

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }
    searchText.current.value = "";
    navigate("/bookList");
  };

  return (
    <div className='w-full max-w-[680px]'>
      <div className='max-w-[1200px] mx-auto px-5'>
        <div>
          <form className='w-full max-w-[680px]' onSubmit={handleSubmit}>
            <div className='py-3 px-7 rounded-lg flex justify-between bg-whitecolor'>
              <input className='focus:outline-none text-blackcolor w-full' type="text" placeholder='Bir kitap aratın.' ref={searchText}/>
              <button className='flex justify-center text-purplecolor' type="submit" onClick={handleSubmit}>
                <FaSearch size={32}/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm