import React from "react";
import SearchBar from "../components/SearchBar";
import WordDetails from "../components/WordDetails";
import { useSelector } from "react-redux";



const HomePage = ()=>{

    const {wordDetails,loading} = useSelector(state=>state.word);

    return (
        <div className="HomePage">
            <SearchBar/>
            {wordDetails?<WordDetails/>:""}
        </div>
    )
}

export default HomePage;