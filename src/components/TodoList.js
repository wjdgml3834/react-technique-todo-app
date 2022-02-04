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

export default TodoList;
