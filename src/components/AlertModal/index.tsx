import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler';
import {  
    Container,
    Title,
    Button,
    ButtonText
} from './styles';

type Props = {
    title: string;
    buttonText: string;
    onPress: () => void;
}

export function AlertModal({ title, buttonText, onPress, ...rest}: Props) {
    return(
        <Container>
            <Title>
                {title}
            </Title>

            <Button
                onPress={onPress}
                {...rest}
            >
                <ButtonText>
                    {buttonText}
                </ButtonText>
            </Button>
        </Container>
    )
}