import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(GestureHandlerRootView)`
    background-color: ${({ theme }) => theme.colors.BLACK_TERTIARY};
    
    align-items: center;
    justify-content: center;

    padding: ${RFValue(24)}px ${RFValue(18)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.WHITE};
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.BOLD};

    margin-bottom: ${RFValue(30)}px;
`;

export const Button = styled(TouchableOpacity).attrs({
    activeOpacity: 0.7
})`
    background-color: ${({ theme }) => theme.colors.ORANGE};
    
    width: 100%;
    height: ${RFValue(48)}px;

    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.WHITE};
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.BOLD};
`;
