import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("スタート");
  //state
  const [num, setNum] = useState(0);
  const [faceShowFlag, SetFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    SetFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || SetFaceShowFlag(true);
        //faceShowFlag || がないとここでレンダリングが発生して最初に戻ってしまう　無限ループ
      } else {
        faceShowFlag && SetFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line
  }, [num]); //第二引数の値が変化したときだけ実行する

  return (
    //{}はJSと認識される
    //css　直接書くか変数にしていれるか
    //イベント {}で中に関数を入れてそっちで処理
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>v(￣Д￣)v ｲｴｲ</p>}
    </>
  );
};

export default App;
