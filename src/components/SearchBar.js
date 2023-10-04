import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { fetchWordDetails } from "../redux/actionsTypes/wordActions";


const SearchBar = ()=>{
    
    const [word, setWord] = useState("");
    const dispatch = useDispatch;

    const handleSearch = () => {
        if (word.trim() !== "") {
          dispatch(fetchWordDetails(word));
        }
      };

    return (
        <div className="SearchBar">
        <input type="text" value={word} onChange={(e) => setWord(e.target.value)} placeholder="Search for meaning"/>
        <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;