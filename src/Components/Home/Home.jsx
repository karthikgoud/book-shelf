import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import BooKCard from "../BooKCard/BooKCard";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { data, dispatch } = useData();

  function filterCategory(booksArr, value) {
    const filteredBooks = booksArr?.filter((book) => book.category === value);
    return filteredBooks;
  }

  return (
    <div className={styles.homeContainer}>
      <NavLink to="/search">Go to search</NavLink>
      <div>
        <h1>Currently Reading</h1>
        <div className={styles.bookCont}>
          {filterCategory(data?.allBooks, "current").map((book) => (
            <BooKCard book={book} />
          ))}
        </div>
      </div>
      <div>
        <h1>Want To Read</h1>
        <div className={styles.bookCont}>
          {filterCategory(data?.allBooks, "wantToRead").map((book) => (
            <BooKCard book={book} />
          ))}
        </div>
      </div>
      <div>
        <h1>Read</h1>
        <div className={styles.bookCont}>
          {filterCategory(data?.allBooks, "read").map((book) => (
            <BooKCard book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
