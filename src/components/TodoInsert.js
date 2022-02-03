import { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import styled from "@emotion/styled";

const TodoInsert = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  return (
    <Cont>
      <Input
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
      />
      <SubmitBtn type="submit">
        <MdAdd />
      </SubmitBtn>
    </Cont>
  );
};

export default TodoInsert;

const Cont = styled.form`
  display: flex;
  background: #495057;
`;
const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
  flex: 1;
`;

const SubmitBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;
