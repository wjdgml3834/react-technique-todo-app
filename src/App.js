import { useReducer, useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}
// useReducer는 기존 코드를 많이 고쳐야하지만, 상태를 업데이트하는 로직을 컴포넌트 바깥에 둘 수 있는 장점이있다.

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // useReducer 사용할때 원래 두 번째 파라미터에 초기 상태를 넣어주어야 한다.
  // 지금은 그 대신 undefined를 넣어주고 세번째 파라미터에 초기상태를 만들어주는 함수 createBulkTodos 넣음
  // 이렇게 하면 컴포넌트가 맨 처음 렌더링 될 때만 createBulkTodos 함수가 호출된다.

  const nextId = useRef(2501);

  console.log(nextId);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
