import { createContext, useContext, useState } from "react";
import { IoMdMore } from "react-icons/io";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledMoreIcon = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: 3px;
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1rem;
    height: 1rem;
    color: var(--color-grey-100);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-50);
  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  /* box-shadow: var(--shadow-md); */
  border-radius: 3px;

  left: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
  background-color: var(--color-white);
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.6rem 1.6rem;

  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.7rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    /* width: 1.6rem;
    height: 1.6rem; */
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const open = setOpenId;
  const close = () => setOpenId("");

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition({
      // x: window.innerWidth - rect.width - rect.x,
      x: rect.left,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <StyledMoreIcon onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledMoreIcon>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (id !== openId) return null;

  return createPortal(
    <StyledList ref={ref} position={position}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
