/* eslint array-callback-return: off */
/* eslint no-unused-vars: off */
import React, { useState } from "react";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomleteTodos, setIncompleteTodos] = useState(["a","iiii"]);

  const [compliteTodos, setCompleteTodos] = useState(["uuuu"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    alert(todoText);
  };

  return (
    <>
      <div>
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          {incomleteTodos.map((todo) => {
            return (
          <li key={ todo }>
            { todo }
            <p>aaa</p>
            <button>fdfdfddfd</button>
            <button>削除</button>
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
      <div>
        <p>完了のTODO</p>
        <ul>
          {compliteTodos.map((todo) => {
            return (
              <li key={todo}>{todo}
              <button>もどす</button></li>
            )
          })}
          <li>
            <p>aaa</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
}
