import React from "react";

const Books = (props) => {
  return (
    <div className="books-container">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Books;
