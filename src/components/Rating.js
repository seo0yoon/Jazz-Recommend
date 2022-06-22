import styled from "styled-components";

const Star = ({ selected = false, rating, onSelect, onHover }) => {
  const handleClick = onSelect ? () => onSelect(rating) : undefined;
  const handleMouseOver = onHover ? () => onHover(rating) : undefined;

  return (
    <RatingStar selected={selected} onClick={handleClick} onMouseOver={handleMouseOver}>
      ★
    </RatingStar>
  );
};

const Rating = ({ value = 0, onSelect, onHover, onMouseOut }) => {
  return (
    <div onMouseOut={onMouseOut}>
      {RATINGS.map((rating) => (
        <Star key={rating} selected={value >= rating} rating={rating} onSelect={onSelect} onHover={onHover} />
      ))}
    </div>
  );
};

export default Rating;

const RATINGS = [1, 2, 3, 4, 5];

const RatingStar = styled.span`
  /* color: ${(props) => (props.selected ? "yellowgreen" : "slategray")}; */
  color: ${({ selected }) => (selected ? "#ffb700;" : "#ffe5a2;")};
  font-size: 30px;
`;
