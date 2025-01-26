import React from "react";
import BrokenCookie from "../fortuneCookieApp/src/assets/images/biscoitoAberto.png"
import Cookie from "../fortuneCookieApp/src/assets/images/biscoito.png"
import { Img } from "./src/components/CookieImg/styles";
import { useState } from "react";
import styled from "styled-components";
import Buttons from "./src/components/Buttons";
import { mensages } from "./src/assets/LuckyText";

export default function App() {
  const [cookieImage, setCookieImage] = useState(Cookie)
  const [msg, setMsg] = useState('')

  function handleBrokenCookie() {
    if (cookieImage == BrokenCookie) {
      return
    }
    setCookieImage(BrokenCookie)
    handleMsg()

  }
  function handleReloadCookie() {
    if (cookieImage == Cookie) {
      return
    }
    setCookieImage(Cookie)
    setMsg('')
  }

  function handleMsg() {
    let index = Math.floor(Math.random() * mensages.length)
    setMsg(mensages[index])
  }

  return (
    <Background>
      {msg && (<TextMessage>{`"${msg}"`}</TextMessage>)}
      <Img source={cookieImage} />
      <Buttons
        onclic={handleReloadCookie}
        txt={'Pegar novo biscoito'}
        color={'rgba(53, 56, 247, 0.7)'}
        disabled={!!msg ? false : true}
      />
      <Buttons
        onclic={handleBrokenCookie}
        txt={'Quebrar biscoito'}
        color={'rgba(252, 182, 30, 0.7)'}
        disabled={!!msg ? true : false}
      />
    </Background>
  )
}

const Background = styled.View`
  flex: 1;
  background-color: rgba(129, 129, 129, 0.7);
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;

const TextMessage = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

