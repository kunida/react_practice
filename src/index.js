import React from "react"; //react17でJSXのみ使用の時はimport必要なし
import ReactDom from "react-dom";
import App from "./App"; //コンポーネント

// const App = () => {
//   return (
//     // 一つのタグで囲わないといけない<div>とかで
//     // <div>を使いたくない時は<React.Fragment>
//     //今はさらに短縮して<>でもいい
//     <>
//       <h1>Hello!!</h1>
//       <p>How are you?</p>
//     </>
//   );
// };

ReactDom.render(<App />, document.getElementById("root"));
