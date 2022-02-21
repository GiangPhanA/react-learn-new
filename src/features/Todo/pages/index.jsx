import React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types'
import TodoList from '../components/TodoList';

const TodoFeature = (props) => {
  // props không thay đổi được.
  // để thay đổi được satus --> chuyển sang dùng satte.
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState('all');
  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx);
    // Sao chép mảng cũ tạo thành 1 mảng mới
    const newTodoList = [...todoList];
    // thay đổi status khi click

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    // newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    setFilteredStatus('all');
  };
  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  };
  const handleShowNewClick = () => {
    setFilteredStatus('new')
  };

  const renderedTodoList = todoList.filter(todo => filteredStatus ==='all' || filteredStatus === todo.status);
  // console.log(renderedTodoList)

  return (
    <div>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
};

export default TodoFeature;
