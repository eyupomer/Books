import React from "react";
import FavoriteItem from "../components/FavoriteItem";
import { useGlobalContext } from "../context/Context";

const Favorite = () => {
  const { favoriteList } = useGlobalContext();

  return (
    <div className="py-14 px-10 bg-[#f8d0db]">
      <div>
        <h3 className="text-center text-4xl font-semibold mb-12">
          Favori Kitaplarım
        </h3>
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favoriteList.map((favoriteBook, id) => (
          <FavoriteItem key={id} favoriteBook={favoriteBook} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
