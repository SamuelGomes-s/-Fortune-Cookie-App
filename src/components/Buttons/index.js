import { Button, ButtonText, Container } from "./styles";

export default function Buttons({ onclic, color, txt }) {
    return (

        <Button bgColor={color} onPress={onclic} activeOpacity={0.7} >
            <Container >
                <ButtonText>
                    {txt}
                </ButtonText>
            </Container>
        </Button>

    )
}