import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Seach from "./review-TA/Seach";
import ListReview from "./review-TA/listReview";
import IReview from "./review-TA/type";


function App() {
  const [listReview, setListReview] = useState<IReview[]>([
    { content: "học tập", date:(new Date()).toLocaleDateString() },
  ]);
  const hadleAddReview = (review: string) => {
    const newData = { content: review, date:(new Date()).toLocaleDateString() };

    setListReview([...listReview, newData]);
    console.log(2222, review);
  };
  const hadleDeleteReview = (index: number) => {
    setListReview(listReview.filter((item, i) => i!== index));
  };

  return (
    <>
      <div className="body">
        <Seach />
        <div className="list-content">
          <ListReview
            data={listReview}
            onAddReview={hadleAddReview}
            onDeleteReview={hadleDeleteReview}
          />
        </div>
      </div>
    </>
  );
}

export default App;
