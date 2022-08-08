import { configureStore } from "@reduxjs/toolkit";
import auth_reducer from "./auth_slice";
import books_reducer from "./books_slice";

export const store = configureStore({
  reducer: {
    books: books_reducer,
    isLogiIn: auth_reducer,
  },
});
