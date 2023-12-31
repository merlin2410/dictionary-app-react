import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWordDetails } from "../redux/actions/wordActions";
import { addToHistory } from "../redux/actions/historyActions";


const SearchBar = ()=>{
    
    const [word, setWord] = useState("");
    const dispatch = useDispatch();

    

    const handleSearch = () => {
        if (word.trim() !== "") {
          dispatch(fetchWordDetails(word));
          dispatch(addToHistory(word));
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