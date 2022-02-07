import React from "react";
import TodoListItem from "./ToddoListItem";
import styled from "@emotion/styled";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <Cont>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </Cont>
  );
};

const Cont = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

export default React.memo(TodoList);

// APP 컴포넌트에 다른 state가 추가되어 해당 값들이 업데이트 될 때는 TOdoList 컴포넌트가 불필요한
// 리렌더링을 할수도 있다. 그렇기 때문에 지금 React.memo를 사용해서 미리 최적화 해준것이다.
