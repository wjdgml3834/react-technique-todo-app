import styled from "@emotion/styled";

const TodoTemplate = ({ children }) => {
  return (
    <TodoCont>
      <Title>일정 관리</Title>
      <Content>{children}</Content>
    </TodoCont>
  );
};

const TodoCont = styled.div`
  width: 512px;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 6rem;
  overflow: hidden;
`;
const Title = styled.h1`
  background: #fcd683;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.section`
  background: white;
`;

export default TodoTemplate;
