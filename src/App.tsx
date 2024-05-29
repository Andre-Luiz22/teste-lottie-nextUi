import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Spinner,
} from "@nextui-org/react";
import { useState } from "react";
import successGod from "./assets/successGod.json";
import error from "./assets/error.json";
import { Player } from "@lottiefiles/react-lottie-player";

export function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [message, setMessage] = useState(
    <Spinner
      color="default"
      size="lg"
      classNames={{
        wrapper: "h-24 w-24 m-10",
        circle1: "border-8",
        circle2: "border-8",
      }}
    />
  );

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xs"
        backdrop="blur"
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        hideCloseButton
        classNames={{
          base: "w-fit transition duration-700",
          body: "",
        }}
      >
        <ModalContent>
          <>
            <ModalBody
              onClick={() => {
                setMessage(
                  <Player
                    className="size-40"
                    src={error}
                    autoplay
                    keepLastFrame
                  />
                );
              }}
            >
              {message}
            </ModalBody>
            {}
          </>
        </ModalContent>
      </Modal>
      <div className="grid h-dvh place-items-center bg-zinc-700">
        <Button color="primary" variant="shadow" size="lg" onPress={onOpen}>
          Ligar Modal
        </Button>
      </div>
    </>
  );
}
