import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled(GestureHandlerRootView)`
    background-color: ${({ theme }) => theme.colors.BLACK_TERTIARY};
    
    width: 100%;
    height: ${RFValue(184)}px;

    padding: ${getBottomSpace() + RFValue(16)}px ${RFValue(24)}px;
    
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: theme.colors.GRAY_PRIMARY
})`
    width: 100%;
    color: ${({ theme }) => theme.colors.WHITE};
    
    width: 100%;
    height: ${RFValue(88)}px;
`;

export const AlertContainer = styled(GestureHandlerRootView)`
    flex: 1;

    background-color: rgba(0, 0, 8, 0.6);

    justify-content: center;

    padding: 0 ${RFValue(20)}px;
`;