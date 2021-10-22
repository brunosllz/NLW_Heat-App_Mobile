import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MotiView } from 'moti';

export const Container = styled(MotiView)`
    margin-bottom: ${RFValue(32)}px;
`;

export const MessageText = styled.Text`
    color: ${({ theme }) => theme.colors.WHITE};
    
    font-family: ${({ theme }) => theme.fonts.REGULAR};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(24)}px;
`;

export const UserProfileWrapper = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: ${RFValue(12)}px;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.WHITE};
    
    font-family: ${({ theme }) => theme.fonts.REGULAR};
    font-size: ${RFValue(15)}px;

    margin-left: 16px;
`;