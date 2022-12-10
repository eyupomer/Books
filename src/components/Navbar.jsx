import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "ana sayfa",
      to: "/"
    },
    {
      id: 2,
      link: "hakkımızda",
      to:"/about"
    },
    {
      id: 3,
      link: "favorilerim",
      to: "/favorite"
    },
    {
      id: 4,
      link: "İletişim",
      to: "/contact"
    }
  ];

  return (
    <div className='flex justify-between items-center py-6 px-5 bg-[#f8b1ed] text-whitecolor'>
      <Link className='flex items-center space-x-2' to="/">
        <img src={logoImg} alt="Site Logo" className='w-20' />
        <h2 className='font-semibold text-xl uppercase'>Books</h2>
      </Link>
      <ul className="hidden md:flex mr-5">
        {links.map(({ id, link, to }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-2xl text-whitecolor hover:scale-105 duration-200"
          >
            <Link to={to}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center translate-x-0 absolute top-0 right-0 w-1/3 h-screen bg-inherit">
          {links.map(({ id, link, to }) => (
            <li
              key={id}
              className="px-4 transition-all duration-200 ease-in-out font-semibold cursor-pointer capitalize py-6 text-2xl whitecolor"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={to}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar