import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// Step1
export const Appcontext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null);

    // Data Filling
    async function fetchBlogPosts(page = 1,tag=null,category) {
        setLoading(true)
        let url = `${baseUrl}?pages=${page}`;
        if(tag){
            url+=`&tag=${tag}`
        }

        if(category){
            url+=`&category=${category}`
        }
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data)
            setPage(data?.page);
            setPosts(data?.posts);
            setTotalPages(data?.totalPages);
        }
        catch (e) {
            console.log("Error")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }


    function handlerPageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }


    const value = {
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
        handlerPageChange,
        fetchBlogPosts
    };

    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
}

export default AppContextProvider;