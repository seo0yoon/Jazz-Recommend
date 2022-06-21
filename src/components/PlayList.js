import React from "react";
import styled from "styled-components";
import Rating from "./Rating";

const PlayListItem = ({ item, onDelete }) => {
  const handleDeleteClick = () => onDelete(item.id);

  return (
    <PlayListItemWrap>
      <PlayListImg src={item.img} alt={item.artist} />
      <div>
        <p>{item.artist}</p>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </PlayListItemWrap>
  );
};

const PlayList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <PlayListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default PlayList;

const PlayListItemWrap = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

const PlayListImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-right: 20px;
`;
