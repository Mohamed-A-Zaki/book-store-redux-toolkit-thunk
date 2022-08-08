import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../store/books_slice";

const Form = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  let { isLogiIn } = useSelector((state) => state.isLogiIn);
  let dispatch = useDispatch();

  function handle_submit(e) {
    e.preventDefault();
    dispatch(addBook({ title, price, description }));
  }

  return (
    <form className="my-3 mx-auto" onSubmit={handle_submit}>
      <div className="container">
        <div className="h2">Insert Book</div>

        <div className="title my-3">
          <label htmlFor="title" className="fs-5">
            Title :
          </label>
          <input
            type="text"
            className="form-control mt-2"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="price my-3">
          <label htmlFor="price" className="fs-5">
            Price :
          </label>
          <input
            type="text"
            className="form-control mt-2"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="description my-3">
          <label htmlFor="description" className="fs-5">
            Description :
          </label>
          <textarea
            name="description"
            id="description"
            className="form-control mt-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary" disabled={!isLogiIn}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
