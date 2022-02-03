import TodoListItem from "./ToddoListItem";
import styled from "@emotion/styled";

const TodoList = () => {
  return (
    <Cont>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </Cont>
  );
};

const Cont = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

export default TodoList;
