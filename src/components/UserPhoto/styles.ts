import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

type ImageProps = {
    type?: 'small' | 'normal'
}

export const Container = styled(LinearGradient).attrs({
    colors: [ theme.colors.PINK, theme.colors.YELLOW ]
})<ImageProps>`
    justify-content: center;
    align-items: center;
    
    height: ${({ type }) => 
    type === 'normal' ? RFValue(44) : RFValue(34)}px;
    width: ${({ type }) => 
    type === 'normal' ? RFValue(44) : RFValue(34)}px;

    border-radius: ${RFPercentage(50)}px;
`;

export const ImageUser = styled.Image<ImageProps>`
    height: ${({ type }) => 
    type === 'normal' ? RFValue(40) : RFValue(30)}px;
    width: ${({ type }) => 
    type === 'normal' ? RFValue(40) : RFValue(30)}px;

    border-radius: ${RFPercentage(50)}px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.BLACK_SECONDARY};
`;