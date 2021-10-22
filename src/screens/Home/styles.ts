import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { KeyboardAvoidingView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const KeyboardUpIphone = styled(KeyboardAvoidingView)`
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.BLACK_SECONDARY};
    
    padding-top: ${getStatusBarHeight() + 17}px;
`;
export const TouchableDimiss = styled.View`
 flex: 1;
`;

export const SendMessageContainer = styled(GestureHandlerRootView)`
`;
