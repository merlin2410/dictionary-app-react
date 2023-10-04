import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWordDetails } from "../redux/actions/wordActions";

const WordDetails = ({ match }) => {

    const dispatch = useDispatch();

    const handleSearch = (word) => {
        if (word.trim() !== "") {
          dispatch(fetchWordDetails(word));
          
        }
      };

const { wordDetails, loading } = useSelector((state) => state.word);
  if(match!==undefined){
    
    
    const { word } = match.params;
    handleSearch(word);
  }
        
  
 
  console.log(wordDetails);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!wordDetails) {
    return <div>Word not found</div>;
  }

  return (
    <div className="word-details">
      <h2>{wordDetails[0].word}</h2>
      {/* Render other word details like phonetics, meanings, etc. */}
    </div>
  );
};

export default WordDetails;
