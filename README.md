# ๐ป ๋์ ์๊ณ  ๊ท์ฌ์ด React Toast UI ๐ป

### [๋ฐฐํฌ](https://62e3d8275ebf510d68e35291--sunny-platypus-fed315.netlify.app/)

### Wanna Be !

- [ ] ๋์์ง๋ ์ ๋๋ฉ์ด์์ ์ปค์คํํ๊ฒ ๋ณ๊ฒฝํ  ์ ์๋๊ฐ?
- [ ] ๋์์ง๋ Toast UI๋ฅผ ์ปค์คํํ๊ฒ ๋ณ๊ฒฝํ  ์ ์๋๊ฐ?
- [ ] NPM ์ถ์๋ ์๋ฃํ์๋๊ฐ?
- [ ] Static Typing์ด ๋์ด์๋๊ฐ?
- [ ] ์ฌ์ฉํ๊ณ  ์ถ์๊ฐ?

### ๐ฅฝ Preview
**์ ์ ๋์**

<img src="https://user-images.githubusercontent.com/78349600/181755379-e6217829-8c01-47bd-b1d7-4daabba263f0.gif" width="300"/>


**ํด๋ฆญํ๋ฉด ๋ด๋ ค๊ฐ๋ค**

<img src="https://user-images.githubusercontent.com/78349600/181755385-e51a7f67-d5af-4a6d-b0c9-3399d6cf3bc4.gif" width="300"/>


**๋น ๋ฅธ ๋์**

<img src="https://user-images.githubusercontent.com/78349600/181755394-912289ba-fa5a-4a21-b19f-198359664880.gif" width="300"/>


### ๐ Usage

**์ธ ์ค ์์ฝ**
1. `ToastProvider`๋ก `Toast UI`๋ฅผ ๋ณด์ฌ์ค ์ปดํฌ๋ํธ๋ฅผ ๊ฐ์ผ๋ค.
2. ๊ฐ์ผ ์ปดํฌ๋ํธ์์ `useToast`๋ฅผ ํธ์ถํด `Toast UI`๋ฅผ ํธ๋ฆฌ๊ฑฐํ  ํจ์๋ฅผ ๋ฐ๋๋ค.
3. ํจ์๋ฅผ ํธ์ถํ์ฌ `Toast UI`๋ฅผ ๋ ๋๋งํ๋ค.


**1. `ToastProvider`๋ก `Toast UI`๋ฅผ ๋ณด์ฌ์ค ์ปดํฌ๋ํธ๋ฅผ ๊ฐ์ผ๋ค.**
```jsx

// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import TestContainer from "./@components/TestContainer";
import ToastProvider from "./@components/ToastProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

//TestContainer์์ Toast UI๋ฅผ ์ถ๋ ฅํ  ๊ฒ์ด๋ฏ๋ก ToastProvider ์ปดํฌ๋ํธ๋ก ๊ฐ์ธ์ค๋ค.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <TestContainer />
    </ToastProvider>
  </React.StrictMode>
);

```


**2. ๊ฐ์ผ ์ปดํฌ๋ํธ์์ `useToast`๋ฅผ ํธ์ถํด `Toast UI`๋ฅผ ํธ๋ฆฌ๊ฑฐํ  ํจ์๋ฅผ ๋ฐ๋๋ค.**
```jsx
// @components/TestContainer/index.jsx

const TestContainer = () => {
  // useToast ํ์ผ๋ก ๋ถํฐ Toast UI๋ฅผ ํธ๋ฆฌ๊ฑฐํ  ํจ์๋ฅผ ๋ฐ์๋ธ๋ค.
  const { displayMessage } = useToast();

  // ...
  
  return (
    <Styled.Root>
      <Styled.Button onClick={onClickTestContainer}>ํด๋ฆญํด๋ณด์ธ์</Styled.Button>
    </Styled.Root>
  );
};

```

**3. ํจ์๋ฅผ ํธ์ถํ์ฌ `Toast UI`๋ฅผ ๋ ๋๋งํ๋ค.**

```jsx

// @components/TestContainer/index.jsx

const TestContainer = () => {
  const { displayMessage } = useToast();
  
  // ํจ์๋ฅผ ํธ์ถํ์ฌ `Toast UI`๋ฅผ ๋ ๋๋งํ๋ค.
  const onClickTestContainer = () => {
    displayMessage("์ค์ฐ์๋๋ค", false);
  };
  
  return (
    <Styled.Root>
      <Styled.Button onClick={onClickTestContainer}>ํด๋ฆญํด๋ณด์ธ์</Styled.Button>
    </Styled.Root>
  );
};


```
