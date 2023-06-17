import React, { useState } from "react";
import styles from "./Search.module.css";
import { NavLink } from "react-router-dom";
import BooKCard from "../BooKCard/BooKCard";
import { useData } from "../../context/DataContext";

const Search = () => {
  const { data } = useData();

  const [text, setText] = useState("");
  console.log(text);

  function filerBooks(arr, textValue) {
    const filterArr = arr.filter((book) =>
      book.title.toLowerCase().includes(textValue)
    );
    return filterArr;
  }

  const searchArr = filerBooks(data.allBooks, text);

  return (
    <div className={styles.container}>
      <div className={styles.seachCont}>
        <NavLink to="/"> ⬅️ Back to shelf</NavLink>
        <div>
          <label>
            Search :{" "}
            <input
              placeholder="...search book title here"
              type="text"
              value={text}
              onChange={(e) => setText((prev) => (prev = e.target.value))}
            />
          </label>
        </div>
      </div>

      {text.length > 0 && (
        <div className={styles.bookContainer}>
          {searchArr.map((book) => (
            <BooKCard book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
