import { createContext, useRef, useState } from "react";
import ReactDOM from "react-dom";

import * as Styled from "./style";

export const ToastContext = createContext({
  displayMessage: (message, isError) => {},
});

const ToastProvider = (props) => {
  const { children } = props;

  const [{ message, isError }, setMessage] = useState({
    message: "",
    isError: false,
  });

  const toastElement = useRef(null);

  const displayMessage = (currentMessage, isError) => {
    setMessage((prev) => ({ ...prev, isError, message: currentMessage }));

    if (message === currentMessage && toastElement.current) {
      const [currentAnimation] = toastElement.current.getAnimations();

      currentAnimation?.cancel();
      currentAnimation?.play();
    }
  };

  const onClickToast = () => {
    if (toastElement.current) {
      const [currentAnimation] = toastElement.current.getAnimations();

      currentAnimation?.reverse();
    }
  };

  return (
    <ToastContext.Provider value={{ displayMessage }}>
      {children}
      {message.length !== 0 &&
        ReactDOM.createPortal(
          <Styled.Root>
            <Styled.ToastMessage
              ref={toastElement}
              isError={isError}
              onClick={onClickToast}
            >
              {message}
            </Styled.ToastMessage>
          </Styled.Root>,
          document.querySelector("#root")
        )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
