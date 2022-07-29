import { useContext } from "react";
import { ToastContext } from "../@components/ToastProvider";

export const useToast = () => {
  const { displayMessage } = useContext(ToastContext);

  return {
    displayMessage,
  };
};
