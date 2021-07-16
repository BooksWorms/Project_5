import React, { useState } from "react";
import axios from "axios";
import "./bookPage.css";

function AddBookPage() {
  const [book_img, setBook_img] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [publisher, setPublisher] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [success, setSuccess] = useState(undefined);

  const AddBook = () => {
    axios
      .post(
        "http://localhost:5000/book",
        {
          book_img: book_img,
          title: title,
          description: description,
          publisher: publisher,
          edition: edition,
          pages: pages,
          price: price,
          author: author,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        setSuccess(false);
        throw err;
      });
  };
  return (
    <div className="AddBook">
      <h1 style={{ color: "#a24e12", marginLeft: "39rem", marginTop: "2rem" }}>
        Add book
      </h1>
      <table className="tableAdd">
      <thead>
        <tr>
          <th>URL picture</th>
          <th>
            {" "}
            <input
              type="text"
              placeholder="URL picture here "
              onChange={(e) => {
                setBook_img(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Title</th>
          <th>
            <input
              type="text"
              placeholder="Title here "
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Description</th>
          <th>
            {" "}
            <input
              type="text"
              placeholder="Description here "
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Publisher</th>
          <th>
            {" "}
            <input
              type="text"
              placeholder="Publisher here "
              onChange={(e) => {
                setPublisher(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Edition</th>
          <th>
            <input
              type="text"
              placeholder="Edition here "
              onChange={(e) => {
                setEdition(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Pages Number</th>
          <th>
            <input
              type="Number"
              placeholder="Pages here "
              onChange={(e) => {
                setPages(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Price</th>
          <th>
            <input
              type="num"
              placeholder="Price here "
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>Author</th>
          <th>
            <input
              type="text"
              placeholder="Author here "
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th></th>
          <th>
            <button onClick={AddBook} className="button-Add">
              Add Book
            </button>
          </th>
        </tr>
        </thead>
      </table>
    </div>
  );
}

export default AddBookPage;
