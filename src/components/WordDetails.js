import React from "react";
import { useSelector } from "react-redux";

const WordDetails = ({ match }) => {
  const { word } = match.params;
  const { wordDetails, loading } = useSelector((state) => state.word);

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
