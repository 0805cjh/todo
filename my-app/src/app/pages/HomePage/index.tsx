import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

export function HomePage() {
  const [todoList, setTodoList] = React.useState<ITodoItem[]>([
    {
      id: '1',
      editing: false,
      content: '투두1',
      completed: false,
    },
    {
      id: '2',
      editing: false,
      content: '투두2',
      completed: false,
    },
    {
      id: '3',
      editing: false,
      content: '투두3',
      completed: false,
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>Todo List</Title>
          <TodoInput
            setTodoListProps={(todo: ITodoItem) =>
              setTodoList([todo, ...todoList])
            }
          ></TodoInput>
          <TodoList>
            {todoList.map(todoElement => (
              <TodoItem todo={todoElement} />
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
