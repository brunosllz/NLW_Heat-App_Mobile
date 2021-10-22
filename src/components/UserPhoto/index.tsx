import React from 'react'
import { Image } from 'react-native';
import {
    Container,
    ImageUser
} from './styles';

import AvatarImg from '../../assets/avatar.png';
import { LinearGradientProps } from 'expo-linear-gradient';

interface Props extends LinearGradientProps {
    avatar_uri: string | undefined;
    type?: 'small' | 'normal';
}

const AVATAR_DEFAULT = Image.resolveAssetSource(AvatarImg).uri;

export function UserPhoto({ avatar_uri, type = 'normal'}: Props) {
    return(
        <Container
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.9, y: 1 }}
            type={type}
        >
            <ImageUser 
                source={{uri: avatar_uri || AVATAR_DEFAULT}}
                type={type}
            />
        </Container>
    )
}