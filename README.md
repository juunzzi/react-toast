# 👻 나의 작고 귀여운 React Toast UI 👻

### [배포](https://62e3d8275ebf510d68e35291--sunny-platypus-fed315.netlify.app/)

### Wanna Be !

- [ ] 띄워지는 애니메이션은 커스텀하게 변경할 수 있는가?
- [ ] 띄워지는 Toast UI를 커스텀하게 변경할 수 있는가?
- [ ] NPM 출시는 완료하였는가?
- [ ] Static Typing이 되어있는가?
- [ ] 사용하고 싶은가?

### 🥽 Preview
**정상 동작**

<img src="https://user-images.githubusercontent.com/78349600/181755379-e6217829-8c01-47bd-b1d7-4daabba263f0.gif" width="300"/>


**클릭하면 내려간다**

<img src="https://user-images.githubusercontent.com/78349600/181755385-e51a7f67-d5af-4a6d-b0c9-3399d6cf3bc4.gif" width="300"/>


**빠른 동작**

<img src="https://user-images.githubusercontent.com/78349600/181755394-912289ba-fa5a-4a21-b19f-198359664880.gif" width="300"/>


### 🔍 Usage

**세 줄 요약**
1. `ToastProvider`로 `Toast UI`를 보여줄 컴포넌트를 감싼다.
2. 감싼 컴포넌트에서 `useToast`를 호출해 `Toast UI`를 트리거할 함수를 받는다.
3. 함수를 호출하여 `Toast UI`를 렌더링한다.


**1. `ToastProvider`로 `Toast UI`를 보여줄 컴포넌트를 감싼다.**
```jsx

// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import TestContainer from "./@components/TestContainer";
import ToastProvider from "./@components/ToastProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

//TestContainer에서 Toast UI를 출력할 것이므로 ToastProvider 컴포넌트로 감싸준다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <TestContainer />
    </ToastProvider>
  </React.StrictMode>
);

```


**2. 감싼 컴포넌트에서 `useToast`를 호출해 `Toast UI`를 트리거할 함수를 받는다.**
```jsx
// @components/TestContainer/index.jsx

const TestContainer = () => {
  // useToast 훅으로 부터 Toast UI를 트리거할 함수를 받아낸다.
  const { displayMessage } = useToast();

  // ...
  
  return (
    <Styled.Root>
      <Styled.Button onClick={onClickTestContainer}>클릭해보세요</Styled.Button>
    </Styled.Root>
  );
};

```

**3. 함수를 호출하여 `Toast UI`를 렌더링한다.**

```jsx

// @components/TestContainer/index.jsx

const TestContainer = () => {
  const { displayMessage } = useToast();
  
  // 함수를 호출하여 `Toast UI`를 렌더링한다.
  const onClickTestContainer = () => {
    displayMessage("준찌입니다", false);
  };
  
  return (
    <Styled.Root>
      <Styled.Button onClick={onClickTestContainer}>클릭해보세요</Styled.Button>
    </Styled.Root>
  );
};


```
