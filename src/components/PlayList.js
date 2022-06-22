import React from "react";
import Rating from "./Rating";
import "./PlayList.scss";

const PlayListItem = ({ item, onDelete }) => {
  const handleDeleteClick = () => onDelete(item.id);

  return (
    <div className="PlayListItem">
      <img className="PlayListItem-img" src={item.img} alt={item.artist} />
      <div className="PlayListItem-rows">
        <p className="PlayListItem-artist">{item.artist}</p>
        <h1 className="PlayListItem-title">
          {item.title}
          <a className="PlayListItem-link" target="_blank" href={item.link}>
            🎧
          </a>
        </h1>

        <div className="PlayListItem-rating">
          <Rating value={item.rating} />
        </div>
        <div className="PlayListItem-buttons">
          <button className="PlayListItem-delete-button" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
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
