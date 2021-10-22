import React from 'react';
import {
    Container,
    Title,
    Icon,
    Loading
} from './styles'

import { RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {
    title: string;
    color?: 'black' | 'white';
    backgroundColor?: 'yellow' | 'pink';
    icon?: boolean;
    isLoading?: boolean; 
} 

export function Button({ 
    title, 
    color = 'black', 
    backgroundColor = 'yellow',
    icon,
    isLoading = false,
     ...rest }: Props) {
    return(
        <Container
            backgroundColor={backgroundColor}
            {...rest}
        >
        {   
            isLoading ? <Loading color={color}/> :
            <>
                {
                    icon &&
                    <Icon name="github"/>
                }

                <Title
                    color={color}
                >
                    {title}
                </Title> 
            </>
        }
        </Container>
    )
}