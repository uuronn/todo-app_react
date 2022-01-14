import React from "react";

export const CompleteTodos = (props) => {
  const {completeTodos, onClickBack} = props;

  return (
    <div>
        <p>完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                {todo}
              <button onClick={() => onClickBack(index)}>もどす</button></li>
            )
          })}
          <li>
            <p>aaa</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
  );
}
