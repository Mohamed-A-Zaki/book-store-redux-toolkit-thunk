import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, show_book_details } from "../store/books_slice";
import { deleteBook } from "./../store/books_slice";

const BookList = () => {
  const { books, loading } = useSelector((state) => state.books);
  const { isLogiIn } = useSelector((state) => state.isLogiIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let book_list = books.map((book) => {
    return (
      <div
        key={book.id}
        className="book d-flex align-items-center justify-content-between border p-2 my-3 rounded"
      >
        <div className="name fs-5">{book.title}</div>

        <div className="controls">
          <button
            className="btn btn-primary mx-1"
            onClick={() => {
              dispatch(show_book_details(book));
            }}
          >
            Read
          </button>

          <button
            className="btn btn-danger mx-1"
            onClick={() =>
              dispatch(deleteBook(book))
                .unwrap()
                .then((value) => {
                  console.log(value);
                })
                .catch((value) => {
                  console.log(value.message);
                })
            }
            disabled={!isLogiIn}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  let no_books = (
    <div className="alert alert-primary" role="alert">
      There Is No Books...
    </div>
  );

  return (
    <div className="col p-3">
      <div className="books-list">
        <div className="h2">Books List</div>
        <div className="books">
          {loading ? "loading..." : books.length ? book_list : no_books}
        </div>
      </div>
    </div>
  );
};

export default BookList;
