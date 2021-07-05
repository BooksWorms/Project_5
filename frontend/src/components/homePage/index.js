import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../reducers/homePage";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      books: state.main.books,
    };
  });

  useEffect(() => {
    Axios.get("http://localhost:5000/book/")
      .then((res) => {
        dispatch(setBooks(res.data));
      })
      .catch((err) => {
        throw err;
      });
  });

  return (
    <div className="home_page">
      {state.books.map((elem, index) => {
        return (
          <div key={index} book_id={elem.book_id} className="book">
            <img className="book_image" src={elem.book_img} alt="Book cover"/>
            <p className="book_element">Title: {elem.title}</p>
            <p className="book_element">Author: {elem.author}</p>
            <p className="book_element">Price: {elem.price}</p>
            {/* <p className="book_element">{elem.ratings}</p> */}
          </div>
        );
      })}
    </div>
  );
}
