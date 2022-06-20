import { useEffect, useState } from "react";
import PlayList from "./PlayList";
import mockItems from "../mock.json";
import { getPlayList } from "../api";

const App = () => {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const hadleTitleClick = () => setOrder("createdAt");
  const hadleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoadClick = async (options) => {
    await getPlayList(options);
    setItems();
  };

  useEffect(() => {
    handleLoadClick({ order, offset: 0, limit: 6 });
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={hadleTitleClick}>제목순</button>
        <button onClick={hadleBestClick}>베스트순</button>
      </div>
      <PlayList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>더보기</button>
    </div>
  );
};

export default App;
