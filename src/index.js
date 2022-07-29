import React from "react";
import ReactDOM from "react-dom/client";
import TestContainer from "./@components/TestContainer";
import ToastProvider from "./@components/ToastProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <TestContainer />
    </ToastProvider>
  </React.StrictMode>
);
