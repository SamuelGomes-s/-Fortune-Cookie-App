import BrokenCookie from "../fortuneCookieApp/src/assets/images/biscoitoAberto.png"
import Cookie from "../fortuneCookieApp/src/assets/images/biscoito.png"
import { Img } from "./src/components/CookieImg/styles";
import { useState } from "react";
import styled from "styled-components";
import Buttons from "./src/components/Buttons";
import { mensages } from "./src/assets/LuckyText";

export default function App() {
  const [cookieImage, setCookieImage] = useState(Cookie)

  return (
    <Background>
      <Img source={cookieImage} />
      <Buttons onclic={() => { }} txt={'Pegar novo biscoito'} color={'rgba(53, 56, 247, 0.7)'} />
      <Buttons onclic={() => { }} txt={'Quebrar biscoito'} color={'rgba(252, 182, 30, 0.7)'} />
    </Background>
  )
}

const Background = styled.View`
  flex: 1;
  background-color: rgba(129, 129, 129, 0.7);
  justify-content: center;
  align-items: center;
`;

