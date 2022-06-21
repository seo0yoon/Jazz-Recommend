import React from "react";
import { useState } from "react";
//리액트에서는 input의 값을 state로 관리한다 .state값과 input을 동일하게 만드는것을 제어컴포넌트라고함
const PlayListForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [rating, setRating] = useState(0);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const hadleArtistChange = (e) => {
    setArtist(e.target.value);
  };

  const hadleRatingChange = (e) => {
    const nextRating = Number(e.target.value) || 0;
    setRating(nextRating);
  };

  return (
    <form>
      <input value={title} onChange={handleTitleChange}></input>
      <input value={artist} onChange={hadleArtistChange}></input>
      <input value={rating} type="number" onChange={hadleRatingChange}></input>
    </form>
  );
};

export default PlayListForm;
