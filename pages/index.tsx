import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, newMessage } from "../store/chat";

export default function Home() {
  const dispatch = useDispatch();
  const messages: string[] = useSelector(getMessages);
  const [messageValue, setMessageValue] = useState("");

  const onRoll = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const diceValue = e.currentTarget?.dataset?.diceValue;
    const roll =
      Math.floor(Math.random() * (diceValue ? Number(diceValue) : 20)) + 1;
    dispatch(newMessage(`1D${diceValue} - ${roll}`));
  };

  const onType = (e: React.SyntheticEvent<HTMLInputElement>) =>
    setMessageValue(e.currentTarget.value);
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const message = messageValue;
      dispatch(newMessage(message));
      setMessageValue("");
    }
  };

  return (
    <AppContainer>
      <SideBar>
        <ul>
          {messages.map((message, i) => (
            <li key={`message_${i}`}>{message}</li>
          ))}
        </ul>
        <input type="text" onChange={onType} onKeyPress={onEnter} />
      </SideBar>

      <DiceList>
        <DiceButton onClick={onRoll} data-dice-value={4}>
          D4
        </DiceButton>
        <DiceButton onClick={onRoll} data-dice-value={6}>
          D6
        </DiceButton>
        <DiceButton onClick={onRoll} data-dice-value={8}>
          D8
        </DiceButton>
        <DiceButton onClick={onRoll} data-dice-value={10}>
          D10
        </DiceButton>
        <DiceButton onClick={onRoll} data-dice-value={12}>
          D12
        </DiceButton>
        <DiceButton onClick={onRoll} data-dice-value={20}>
          D20
        </DiceButton>
      </DiceList>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const SideBar = styled.div`
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.42));
  -webkit-backdrop-filter: blur(10px) saturate(140%);
  backdrop-filter: blur(10px) saturate(140%);
  height: 100%;
  width: 450px;
  position: fixed;
  top: 0;
  right: 0;
  overflow-x: visible;
  transition: right 0.5s ease;
`;

const DiceList = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0;
  transform: none;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0;
  background: rgba(49, 49, 58, 0.871);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  padding: 0.5em 1em;
  border-radius: 0 21px 0 0;
`;

const DiceButton = styled.button``;
