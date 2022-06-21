import React from "react";
import { useState } from "react";
import styled from "styled-components";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

//리액트에서는 input의 값을 state로 관리한다 .state값과 input을 동일하게 만드는것을 제어컴포넌트라고함
const PlayListForm = ({ setItems, items }) => {
  //state 하나로 합치기 :input태그의 name 속성을 활용해야함!=>이벤트 객체에서 name 값을 가져올 수 있음
  // const [title, setTitle] = useState("");
  // const [artist, setArtist] = useState("");
  // const [rating, setRating] = useState(0);

  const [values, setValues] = useState({
    //하나로 합치기
    title: "",
    rating: 0,
    artist: "",
    img: null,
  });

  const handleChange = (name, value) => {
    //네임과 벨류를 파라미터로 받아서 setter함수를 호출한다.
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleInputChange = (e) => {
    //핸들체인지 함수
    //handle함수도 하나로 만듬
    const { name, value } = e.target; //원래는 e.target.value로 적어줬던것을 구조분해할당으로 name,value 다 적어줌
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createInput = [
      { id: 10, title: values.title, rating: values.rating, artist: values.artist, img: null },
      ...items,
    ];
    setItems(createInput);
  };

  return (
    <PlayListFormWrap onSubmit={handleSubmit}>
      <FileInput name="img" value={values.img} onChange={handleChange} />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <input name="artist" value={values.artist} onChange={handleInputChange} />
      <RatingInput name="rating" value={values.rating} type="number" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        확인
      </button>
    </PlayListFormWrap>
  );
};

export default PlayListForm;

const PlayListFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 300px;
`;
