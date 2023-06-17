import { useData } from "../../context/DataContext";
import styles from "./BooKCard.module.css";

import { useState } from "react";

const BooKCard = ({ book }) => {
  const { dispatch } = useData();
  const [showModal, setShowModal] = useState(false);

  function changeHandler(bookId, categoryValue) {
    dispatch({
      type: "CHANGE_CATEGORY",
      payload: { id: bookId, value: categoryValue },
    });
    setShowModal(false);
  }

  return (
    <div className={styles.cardCont}>
      <div>
        <img src={book.bookUrl} alt="game bbok" />
      </div>
      <div className={styles.title}>Title: {book.title}</div>
      <div className={styles.author}>Author: {book.author}</div>
      <button onClick={() => setShowModal((prev) => !prev)}>+</button>
      {showModal && (
        <div className={styles.inputCont}>
          <label>
            <input
              name="cat"
              type="radio"
              // checked={book.category === "current"}
              defaultChecked={book.category === "current"}
              onChange={(e) => changeHandler(book.id, "current")}
            />
            Currently Reading
          </label>
          <label>
            <input
              name="cat"
              type="radio"
              defaultChecked={book.category === "wantToRead"}
              onChange={(e) => changeHandler(book.id, "wantToRead")}
            />
            Want To Read
          </label>
          <label>
            <input
              name="cat"
              type="radio"
              defaultChecked={book.category === "read"}
              onChange={(e) => changeHandler(book.id, "read")}
            />
            Read
          </label>
        </div>
      )}
    </div>
  );
};

export default BooKCard;
