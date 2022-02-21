import React from 'react';
import PropTypes from 'prop-types';

//propTypes để kiểm tra đúng loại dữ liệu cho props

// declare all props used in this component
TodoList.propTypes = {
  todoList: PropTypes.array,
};

// don't forget to set default value for non-required props
TodoList.defaultProps = {
  todoList: [],
};

function TodoList({ todoList }) {
  return (
    <div>
      TodoList
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
