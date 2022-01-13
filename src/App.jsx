/* eslint array-callback-return: off */
/* eslint no-unused-vars: off */
import React, { useState } from "react";

export const App = () => {
  const [incomleteTodos, setIncompleteTodos] = useState(["aaa","iiii"]);
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          {incomleteTodos.map((todo) => {
          })}
          <li>
            <p>aaa</p>
            <button>完了</button>
            <button>削除</button>
          </li>
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
          <li>
            <p>aaa</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
}