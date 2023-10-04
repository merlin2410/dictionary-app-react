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
    <div className="WordDetails">
      {
        wordDetails.map((obj)=>{
            let wordName = obj.word;

            
            return(
                <div>
                    <h2>{obj.word}</h2>
                    {
                        obj.phonetics.map((phone)=>{
                            return(
                                <div>
                                    <p><i>{phone.text}</i></p>
                                    <audio controls>
                                        <source src={phone.audio} type="audio/mpeg"/>
                                    </audio>
                                    
                                </div>
                            )
                        })

                    }
                    {
                        obj.meanings.map((meaning)=>{
                            return (
                                <div>
                                    <strong>{meaning.partOfSpeech}</strong>
                                    {
                                        
                                        meaning.definitions.map((defObj)=>{
                                            console.log(defObj.synonyms);
                                            console.log(defObj.antonyms);
                                            return(
                                                <div>
                                                    <p>{defObj.definition}</p>
                                                    {defObj.synonyms.length>0?<p>Synonyms:</p>:""}
                                                    {
                                                    
                                                        defObj.synonyms.map((synonym)=>{
                                                            return(
                                                                <p>{synonym}, </p>
                                                            )
                                                        })
                                                    }
                                                    {defObj.antonyms.length>0?<p>Antonyms:</p>:""}
                                                    {
                                                        defObj.antonyms.map((antonym)=>{
                                                            return (
                                                                <p>{antonym}, </p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            )

        })
      }
      {/* Render other word details like phonetics, meanings, etc. */}
    </div>
  );
};

export default WordDetails;
