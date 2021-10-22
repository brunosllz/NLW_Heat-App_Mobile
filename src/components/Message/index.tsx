import React from 'react';
import { UserPhoto } from '../UserPhoto';
import {
    Container,
    MessageText,
    UserProfileWrapper,
    UserName
} from './styles';

export type MessageProps = {
    id: string;
    text: string;
    user: {
      name: string;
      avatar_url: string ;
    }
}

type Props = {
    data: MessageProps;
}

export function Message({ data }: Props) {
    return(
        <Container
            from={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 700 }}
        >
            <MessageText>
               {data.text}
            </MessageText>

            <UserProfileWrapper>
                <UserPhoto 
                    avatar_uri={data.user.avatar_url}
                    colors={[]}
                    type='small'
                />

                <UserName>
                    {data.user.name}
                </UserName>
            </UserProfileWrapper>
        </Container>
    )
}