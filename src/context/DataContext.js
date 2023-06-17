import { createContext, useContext, useReducer } from "react";
import { booksData } from "../constants/books.js";

export const DataContext = createContext();

const initialState = {
  allBooks: booksData,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      const updatedArr = state.allBooks.map((book) =>
        book.id === action.payload.id
          ? { ...book, category: action.payload.value }
          : book
      );
      return { ...state, allBooks: updatedArr };

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  // console.log(data);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
