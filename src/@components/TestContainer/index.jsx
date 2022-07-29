import React from "react";
import { useToast } from "../../@hooks/useToast";
import * as Styled from "./style";

const TestContainer = () => {
  const { displayMessage } = useToast();

  const onClickTestContainer = () => {
    displayMessage("준찌입니다", false);
  };

  return (
    <Styled.Root>
      <Styled.Button onClick={onClickTestContainer}>클릭해보세요</Styled.Button>
    </Styled.Root>
  );
};

export default TestContainer;
