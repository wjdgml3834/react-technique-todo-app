import { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "한라봉으로 주스 만들어 먹기",
      checked: true,
    },
    {
      id: 2,
      text: "맥북 컴퓨터 삼성 컴퓨터로 바꾸기",
      checked: true,
    },
    {
      id: 3,
      text: "넷플릭스 지금 우리 학교는 3화 보기",
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
