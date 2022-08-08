import React from "react";
import { useSelector } from "react-redux";

const BookDetails = () => {
  let { selected_book } = useSelector((state) => state.books);

  let no_books = (
    <div className="alert alert-primary" role="alert">
      There Is No Books...
    </div>
  );

  let book_details = (
    <div className="details">
      <div className="title">title : {selected_book.title}</div>
      <div className="pricd">price : {selected_book.price}</div>
      <div className="auther">auther : {selected_book.auther}</div>
      <div className="desc">description : {selected_book.description}</div>
    </div>
  );

  return (
    <div className="col p-3">
      <div className="book-details">
        <div className="h2">Book Details</div>
        {Object.keys(selected_book).length ? book_details : no_books}
      </div>
    </div>
  );
};

export default BookDetails;
