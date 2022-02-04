import styled from "@emotion/styled";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <ItemCont>
      <CheckBoxCont
        className={cn("checkbox", { checked })}
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <p>{text}</p>
      </CheckBoxCont>
      <RemoveCont onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </RemoveCont>
    </ItemCont>
  );
};

const ItemCont = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-of-type(even) {
    background: #f8f9fa;
  }
`;

const CheckBoxCont = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  p {
    margin-left: 0.5rem;
  }
  &.checked {
    svg {
      color: #22b8cf;
    }
    p {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;

const RemoveCont = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  &:hover {
    color: #ff8787;
  }
`;

export default TodoListItem;
