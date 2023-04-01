import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import Loader from "./Loader";
import TickPay from "./TickPay";
const LoadingModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
     setShowSpinner(true);
    if (isOpen==true) {
     
      const timeoutId = setTimeout(() => {
        setShowSpinner(false);
      }, 2500);
      return () => clearTimeout(timeoutId);
    }

    
  }, [isOpen]);
  console.log(showSpinner, isOpen, "Show");

  return (
    <>
      <Button
        borderRadius={"none"}
        colorScheme="teal"
        width={"100%"}
        onClick={onOpen}
      >
        {" "}
        CONFIRM ORDER
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment in Process</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>{showSpinner ? <Loader /> : <TickPay />}</Center>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" variant="ghost">
              Back to Home
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoadingModal;
