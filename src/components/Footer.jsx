import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center bg-[#f8b1ed] px-12 py-14 items-center">
      <div className="flex flex-col items-center">
        <h3 className="mb-4 font-semibold text-xl">Sayfalar</h3>
        <ul className="flex flex-col space-y-3 items-center">
          <li className="cursor-pointer">
            <a href="/">Anasayfa</a>{" "}
          </li>
          <li className="cursor-pointer">
            <a href="/About">Hakkımızda</a>{" "}
          </li>
          <li className="cursor-pointer">
            <a href="/Favorite">Favorilerim</a>{" "}
          </li>
          <li className="cursor-pointer">
            <a href="/Contact">İletişim</a>{" "}
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="mb-4 font-semibold text-xl">İletişim</h3>
        <ul className="flex flex-col space-y-1 items-center">
          <li> Eyüp Ömer Odabaşı</li>
          <li>
            <span>Tel: </span> 0555 555 55 55
          </li>
          <li>
            
            <span>Sabit Tel: </span> 0362 555 55 55
          </li>
          <li>
            
            <span>Mail:</span> odabasieyupomer@gmail.com
          </li>
          <li></li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="mb-4 font-semibold text-xl">Sosyal Medya</h3>
        <ul className="flex flex-col space-y-1">
          <li>
            <a className="flex items-center" href="/">
              <BsInstagram className="mr-2" /> Instagram
            </a>
          </li>
          <li>
            <a className="flex items-center" href="/">
              <BsTwitter className="mr-2" /> Twitter
            </a>
          </li>
          <li>
            <a className="flex items-center" href="/">
              <BsLinkedin className="mr-2" /> LinkedIN
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
