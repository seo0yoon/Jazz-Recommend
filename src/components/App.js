import { useState } from "react";
import PlayList from "./PlayList";
import mockItems from "../mock.json";
import PlayListForm from "./PlayListForm";

const App = () => {
  const [items, setItems] = useState(mockItems.slice(1, 6)); //처음에 5개만 보여줄려고
  const [order, setOrder] = useState("rating"); //클릭한 값을 저장하는거 rating, artist
  const [count, setCount] = useState(11); //처음에 5개만 보여줬으니 초기값
  const [isDisabled, setIsDisabled] = useState(false);

  const sortedItems = //rating 과 artist 의 sort
    order === "artist"
      ? items.sort((a, b) => (a[order] > b[order] ? 1 : -1)) //order랑 artist가 참이면 문자열일 경우엔 < > 로 표시해야함, a가 b보다 크면 1은 나둬달라는 말, -1은 바꿔달라는 말
      : items.sort((a, b) => (a[order] > b[order] ? -1 : 1)); //rating 일댄 이렇게 해줘라

  const hadleArtistClick = () => setOrder("artist");
  const hadleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleMoreLoad = () => {
    setCount((prevCount) => prevCount + 5); ///전의 값에 +5씩 해줘야함
    setItems(mockItems.slice(1, count)); //setItems를 넣어주지않으면 데이터가 안보임,
    if (count >= mockItems.length) {
      //카운트가 목데이터의 배열길이보다 크면 === 클릭한값이 20보다 크면 버튼 활성화
      setIsDisabled(true);
    }
  };

  return (
    <div>
      <div>
        <button onClick={hadleArtistClick}>제목순</button>
        <button onClick={hadleBestClick}>베스트순</button>
      </div>
      <PlayListForm />
      <PlayList items={sortedItems} onDelete={handleDelete} />
      <button disabled={isDisabled} onClick={handleMoreLoad}>
        더보기
      </button>
    </div>
  );
};

export default App;
