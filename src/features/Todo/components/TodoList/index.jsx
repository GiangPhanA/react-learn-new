import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames'
import './styles.scss'
//propTypes để kiểm tra đúng loại dữ liệu cho props

// declare all props used in this component
TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick:PropTypes.func,
};

// don't forget to set default value for non-required props
TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClickItem = (todo, idx) => {
    if(!onTodoClick) return;
    onTodoClick(todo, idx);
  }
  return (
    <div>
      TodoList
      <ul className='todo-list'>
        {todoList.map((todo,idx) => (
          <li key={todo.id} 
          className={classnames({
            'todo-item': true,
            completed: todo.status === 'completed'})}
            onClick={()=> handleTodoClickItem(todo, idx)}>
            {todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
