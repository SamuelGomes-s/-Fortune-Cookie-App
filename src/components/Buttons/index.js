import { Button, ButtonText, Container } from "./styles";

export default function Buttons({ onclic, color, txt, disabled}) {
    return (
        <Button bgColor={color} onPress={onclic} activeOpacity={0.7}  disabled={disabled}>
            <Container >
                <ButtonText>
                    {txt}
                </ButtonText>
            </Container>
        </Button>
    )
}