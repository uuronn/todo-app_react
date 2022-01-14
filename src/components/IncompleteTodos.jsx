import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div>
        <p>未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
          <li key={ todo }>
            { todo }
            <p>aaa</p>
            <button onClick={() => onClickComplete(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
            {/* 引数を渡すときは関数を作る */}
          </li>

            )
          })}
          <li>
            <p>iii</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
  )
}
