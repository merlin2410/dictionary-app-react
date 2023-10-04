import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWordDetails } from "../redux/actions/wordActions";


const SearchBar = ()=>{
    
    const [word, setWord] = useState("");
    const dispatch = useDispatch();

    const wordDetails = useSelector(state=>state.word);
    console.log(wordDetails); 

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