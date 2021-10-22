import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';

type ColorsProps = {
    color?: 'black' | 'white';
    backgroundColor?: 'yellow' | 'pink'; 
}

export const Container = styled(RectButton)<ColorsProps>`
    flex-direction: row;

    background-color: ${({ theme, backgroundColor}) => 
        backgroundColor === 'yellow' ? 
            theme.colors.YELLOW : theme.colors.PINK
    };

    width: 100%;
    height: ${RFValue(48)}px;

    justify-content: center;
    align-items: center;
`;

export const Icon = styled(AntDesign)`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
`;

export const Title = styled.Text<ColorsProps>`
    color: ${({ theme, color}) => 
        color === 'black' ? 
            theme.colors.BLACK_PRIMARY : theme.colors.WHITE
    };

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.BOLD};
`;

export const Loading = styled(ActivityIndicator)<ColorsProps>`
    color: ${({ theme, color}) => 
        color === 'black' ? 
            theme.colors.BLACK_PRIMARY : theme.colors.WHITE
    };
`