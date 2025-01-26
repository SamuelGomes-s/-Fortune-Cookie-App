import styled from "styled-components/native";

const Container = styled.View`
`;
const Button = styled.TouchableOpacity`
    background-color: ${props => props.bgColor};
    padding: 10px;
    min-width: 70%;
    margin-top: 15px;
    border-radius: 20px;
    display:flex;
    align-items: center;
    justify-content: center;`;

const ButtonText = styled.Text`
    color:#fff;
    font-size: 16px;
`;

export {
    Container,
    ButtonText,
    Button
}