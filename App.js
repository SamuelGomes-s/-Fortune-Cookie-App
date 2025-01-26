import { Text, View } from "react-native";
import BrokenCookie from "../fortuneCookieApp/src/assets/images/biscoitoAberto.png"
import Cookie from "../fortuneCookieApp/src/assets/images/biscoito.png"
import { Img } from "./src/components/CookieImg/styles";
import { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [cookieImage, setCookieImage] = useState(Cookie)

  return (
    <Background>
      <Img source={cookieImage} />
    </Background>
  )
}

const Background = styled.View`
  flex: 1;
  background-color: rgba(129, 129, 129, 0.7);
  justify-content: center;
  align-items: center;
`;

