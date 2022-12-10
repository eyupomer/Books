import React, { useState, useContext, useEffect, useCallback, createContext } from 'react';

const SEARCH_URL = "http://openlibrary.org/search.json?title=";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const [favoriteList, setFavoriteList] = useState([]);

    const getBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${SEARCH_URL}${searchTerm}`);
            const data = await response.json();
            const { docs } = data;

            if (docs) {
                const newBooks = docs.slice(0, 50).map((bookSingle) => {
                    const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });
                newBooks.length > 1 && setResultTitle("Your Search Result");
                setBooks(newBooks);
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            };
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        getBooks();
    }, [searchTerm, getBooks])

    return (
        <AppContext.Provider value={{ loading, books, setSearchTerm, resultTitle, setResultTitle, favoriteList, setFavoriteList}}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };