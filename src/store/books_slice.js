import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (args, ThunkApi) => {
    let res = await axios.get("http://localhost:3005/books");
    return res.data;
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (book, ThunkApi) => {
    book.auther = ThunkApi.getState().isLogiIn.auther;
    const res = await axios.post("http://localhost:3005/books", book);
    return res.data;
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (book, ThunkApi) => {
    await axios.delete(`http://localhost:3005/books/${book.id}`);
    return book;
  }
);

export const books_slice = createSlice({
  name: "books",

  initialState: {
    books: [],
    selected_book: {},
    loading: false,
    error: false,
  },

  reducers: {
    show_book_details: (state, { payload }) => {
      state.selected_book = payload;
    },
  },

  extraReducers: {
    // get books
    [getBooks.pending]: (state, action) => {
      state.loading = true;
    },

    [getBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.loading = false;
    },

    [getBooks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    // add book
    [addBook.pending]: (state, action) => {
      state.loading = true;
    },

    [addBook.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.books.push(payload);
    },

    [addBook.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },

    // delete Book
    [deleteBook.pending]: (state, action) => {
      state.loading = true;
    },

    [deleteBook.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.books = state.books.filter((book) => book.id !== payload.id);
    },

    [deleteBook.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },
  },
});

export const { show_book_details } = books_slice.actions;

export default books_slice.reducer;
