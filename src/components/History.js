import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const History = () => {
  const history = useSelector((state) => state.history.history);

  return (
    <div className="history">
      <h2>Search History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <Link to={`/word/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
