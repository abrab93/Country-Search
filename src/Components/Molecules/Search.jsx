import React, { useContext } from "react";
import ThemeContext from "./../../Context/ThemeContext";

const Search = () => {

    const [theme] = useContext(ThemeContext);
    const blackOrWhite = theme === "light"? "gray-500": "white";
    return(
        <form action="" class = {`rounded border-1 py-4 px-8 shadow-md ${theme}-mode-elements mb-10 md:mb-0`}>
            <label htmlFor="country" class = "flex">
                <svg id="Layer_1" x="0px" y="0px" viewBox="0 0 101 101" height = "25px" width = "25px" class = "mr-2" style = {{path: "red"}}>
                    <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z" fill = "#cccccc"/>
                </svg>
                <input class = {`placeholder-${blackOrWhite} ${theme}-mode-elements `} type="text" name="" placeholder = "Search for a country..." id="country"/>
            </label>

    
            
        </form>
        
    );
}

export default Search;