// import React, { useEffect, useState, useRef } from "react";
// import ReactDOM from "react-dom";

// const useSetState = (initialState = []) => {
//   const [state, setState] = useState(initialState);
//   const add = (item) => setState((prev) => [...prev, item]);
//   const remove = (item) =>
//     setState((prev) => prev.filter((prevItem) => prevItem !== item));

//   return [state, setState];
// };

// const useSound = (url: string) => {
//   const sound = useRef(new Audio(url));
//   return {
//     play: () => sound.current.play(),
//     stop: () => {
//       sound.current.pause();
//       sound.current.currentTime = 0;
//     },
//   };
// };

// const Key = ({})
