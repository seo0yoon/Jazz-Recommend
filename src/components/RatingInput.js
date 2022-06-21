import { useState } from "react";
import Rating from "./Rating";
import styled from "styled-components";

const RatingInput = ({ name, value, onChange }) => {
  const [rating, setRating] = useState(value);

  const handleSelect = (nextValue) => onChange(name, nextValue);

  const handleMouseOut = () => setRating(value);
  return (
    <RatingWrap>
      <Rating value={rating} onSelect={handleSelect} onHover={setRating} onMouseOUt={handleMouseOut} />
    </RatingWrap>
  );
};

export default RatingInput;

const RatingWrap = styled.div`
  cursor: pointer;
`;
