import React, { useState } from "react";
import Axios from "axios";
import { Link,Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./navigation.css";
// import { searchBook } from "../../reducers/navigation";
import login from "../../reducers/login";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
//   const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  // I'm not sure if it's necessary for navigation to have a reducer
//   const state = useSelector((state) => {
//     return {
//       searched_book: state.navigation.searched_book,
//     };
//   });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    if (!search) {
      e.preventDefault();
    } else {
      // How to get all authors' names for comparison?
      // if search value is an author, then search books by author. Otherwise, search book by title
      if (search === "author_name") {
        Axios.get(`http://localhost:5000/book/search_author?author=${search}`)
          .then((res) => {
            // dispatch(searchBook(res.data));
          })
          .catch((err) => {
            throw err;
          });
      } else {
        Axios.get(`http://localhost:5000/book/search_title?title=${search}`)
          .then((res) => {
            // dispatch(searchBook(res.data));
          })
          .catch((err) => {
            throw err;
          });
      }
    }
  };

  
  return (
    <div className="NavBar">
      <Link to="/categories" style={{textDecoration: "none",}}>Categories</Link>
      <Link to="/authors" style={{textDecoration: "none",}}>Authors</Link>
      <input
        type="text"
        placeholder="Search book by title or author"
        onChange={handleChange}
      />
      <span>
        <button onClick={handleClick}>Search</button>
      </span>
      <Link to="/login" style={{textDecoration: "none",}}>Login</Link>
      <Link to="/Register" style={{textDecoration: "none",}}>
        <button>Sign up</button>
      </Link>
      {/* Should search results be displayed in main component? Or should it be redirected into a new page? */}
    </div>
  );
};

export default Navigation;