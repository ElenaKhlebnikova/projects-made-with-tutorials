import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "./context/FeedbackContext";
function RatingSelect({ select }) {
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  const [selected, setSelected] = useState();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ul className="rating">
      {arr.map((_, i) => {
        return (
          <li key={`rating-${i + 1}`}>
            <input
              type="radio"
              id={`num${i + 1}`}
              name="rating"
              value={i + 1}
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        );
      })}
    </ul>
  );

  // return (
  //   <ul className="rating">
  //     {Array.from({ length: 10 }, (_, i) => (
  //       <li key={`rating-${i + 1}`}>
  //         <input
  //           type="radio"
  //           id={`num${i + 1}`}
  //           name="rating"
  //           value={i + 1}
  //           onChange={handleChange}
  //           checked={selected === i + 1}
  //         />
  //         <label htmlFor={`num${i + 1}`}>{i + 1}</label>
  //       </li>
  //     ))}
  //   </ul>
  // );
}

export default RatingSelect;
