import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";

const TodoListItem = () => {
  return (
    <div>
      <div>
        <MdCheckBoxOutlineBlank />
        <div>할일</div>
      </div>
      <div>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
