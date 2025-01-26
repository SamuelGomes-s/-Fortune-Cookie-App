import { Img } from "./styles";

export default function CookieImg({ source }) {
    return <Img src={require(source)} />
}