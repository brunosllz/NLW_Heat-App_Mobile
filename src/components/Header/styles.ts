import styled from 'styled-components/native';
import { BorderlessButton, GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled((GestureHandlerRootView))`
    flex-direction: row;
    
    width: 100%;

    align-items: center;
    justify-content: space-between;

    padding: 0 ${RFValue(20)}px;
`;

export const UserProfileWrapper = styled(GestureHandlerRootView)`
    flex-direction: row;

    align-items: center;

    margin-right: 4px;
`;

export const LogoutButton = styled(BorderlessButton)`
    margin-right: 20px;
`;

export const LogoutButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.WHITE};
    
    font-family: ${({ theme }) => theme.fonts.REGULAR};;
    font-size: ${RFValue(15)}px;
`;

