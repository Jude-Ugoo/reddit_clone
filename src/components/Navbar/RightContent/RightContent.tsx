import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../Model/Auth/AuthModal";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  // user
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModal />
      <Flex>
        <AuthButtons />
      </Flex>
    </>
  );
};
export default RightContent;
