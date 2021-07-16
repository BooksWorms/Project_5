import React, { useState } from "react";
import axios from "axios";
import "./../Category/Category.css";

export default function Category() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("التصنيفات");

  const categories = (category_id) => {
    axios
      .get(`/book/Category/${category_id}`)
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <>
      <h1 className="h1"> {name} </h1>
      {!show ? (
        <div className="categories">
          <img
            src="https://www.ktaab.com/wp-content/uploads/2015/04/1-31.png"
            onClick={() => {
              categories(1);
              setShow(true);
              setName("الروايات ");
            }}
            alt="صورة لمجموعة من الكتب مكتوب تحتها كلمة روايات"
          />
          <img
            src="https://www.ktaab.com/wp-content/uploads/2015/04/1-61.png"
            onClick={() => {
              categories(2);
              setShow(true);
              setName("سياسة ");
            }}
            alt="صورة لمجموعة من الكتب مكتوب تحتها كلمة سياسة"
          />
          <img
            src="https://www.ktaab.com/wp-content/uploads/2015/04/1-71.png"
            onClick={() => {
              categories(3);
              setShow(true);
              setName("تاريخ ");
            }}
            alt="صورة لمجموعة من الكتب مكتوب تحتها كلمة تاريخ"
          />
          <img
            src="https://www.ktaab.com/wp-content/uploads/2015/04/1-41.png"
            onClick={() => {
              categories(4);
              setShow(true);
              setName("علوم ");
            }}
            alt="صورة لمجموعة من الكتب مكتوب تحتها كلمة علوم"
          />
          <img
            src="https://www.ktaab.com/wp-content/uploads/2015/04/11.png"
            onClick={() => {
              categories(5);
              setShow(true);
              setName("شعر ");
            }}
            alt="صورة لمجموعة من الكتب مكتوب تحتها كلمة شعر"
          />
          <img
            src="https://www.ktaab.com/wp-content/uploads/2015/04/1-91.png"
            onClick={() => {
              categories(6);
              setShow(true);
              setName(" قصص");
            }}
            alt="صورة لمجموعة من الكتب مكتوب تحتها كلمة قصص"
          />
          <img
            src="https://www.ktaab.com/wp-content/uploads/2015/04/1-12.png"
            onClick={() => {
              categories(7);
              setShow(true);
              setName("فلسفة");
            }}
            alt="صورة لمجموعة من الكتب مكتوب تحتها كلمة فلسفة"
          />
          <img
            src="https://www.ktaab.com/wp-content/uploads/2015/04/%D8%B3%D8%A7%D8%AE%D8%B1.png"
            onClick={() => {
              categories(8);
              setShow(true);
              setName("الأدب الساخر");
            }}
            alt="صورة لمجموعة من الكتب مكتوب تحتها جملة الأدب الساخر"
          />
          <img
            src="https://www.ktaab.com/wp-content/uploads/2015/04/deen.png"
            onClick={() => {
              categories(9);
              setShow(true);
              setName("كتب دينية");
            }}
            alt="صورة لمجموعة من الكتب مكتوب تحتها جملة كتب دينية"
          />
        </div>
      ) : (
        ""
      )}
      <div className="AllCategory">
        {show ? (
          <>
            {data.map((elem, index) => {
              return (
                <div
                  key={index}
                  book_id={elem.book_id}
                  className="categoryDetails"
                >
                  <img
                    className="imgCategoryDetails"
                    src={elem.book_img}
                    alt="غلاف الكتاب"
                  />
                  <hr />
                  <p>العنوان: {elem.title}</p>
                  <p>المؤلف: {elem.author}</p>
                  <p>السعر(بالدينار): {elem.price}</p>
                  {/* <ReactStars
              count={5}
              onClick={ratingChanged}
              size={24}
              activeColor="#FFD700"
              isHalf={true}
            /> */}
                </div>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
      {show ? (
        <button
          className="returnButton"
          onClick={() => {
            setShow(false);
          }}
        >
          Back To Category
        </button>
      ) : (
        ""
      )}
    </>
  );
}
