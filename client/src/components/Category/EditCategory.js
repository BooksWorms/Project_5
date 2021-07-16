import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function EditCategory() {
  const [category_id, setCategory_id] = useState(0);
  const [category, setCategory] = useState();

  const state = useSelector((state) => {
    return {
      token: state.login.token,
    };
  });

  const EditCategories = () => {
    axios.put(
      `/category/${category_id}`,
      {
        category: category,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };

  return (
    <div className="EditCategory">
      <h1 style={{ color: "#a24e12", marginLeft: "32rem", marginTop: "2rem" }}>
        Edit Category
      </h1>
      <table className="tableEditCategory">
        <tbody>
          <tr>
            {" "}
            <th>Category Id</th>
            <th>
              <input
                type="number"
                placeholder="category_id here "
                onChange={(e) => {
                  setCategory_id(e.target.value);
                }}
              />
            </th>
          </tr>
          <tr>
            <th>Category</th>
            <th>
              <input
                type="text"
                placeholder="category here "
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </th>
          </tr>
          <tr>
            <th></th>
            <th>
              <button className="EditCategoryButton" onClick={EditCategories}>
                Edit Category
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EditCategory;