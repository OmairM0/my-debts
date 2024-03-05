import { cloneElement, createContext, useContext, useState } from "react";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledWindow = styled.div`
  /* width: 80%;
  height: 50%; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  background-color: var(--color-white);
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  background: none;
  padding: 0.3rem;
  /* width: 2.4rem;
  height: 2.4rem; */
  display: flex;
  align-items: center;
  transform: translate(-4px, 3px);
  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, openwindowname }) {
  const { open } = useContext(ModalContext);
  // console.log("test");

  //   return cloneElement(children, {
  //     onClick: () => {
  //       console.log("click");
  //       open(openwindowname);
  //     },
  //   });
  // return cloneElement(children, {
  //   onClick: () => open(openwindowname),
  //   test: true,
  // });
  return <div onClick={() => open(openwindowname)}>{children}</div>;
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close, true);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledWindow ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledWindow>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
