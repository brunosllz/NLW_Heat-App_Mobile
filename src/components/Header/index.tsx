import React from 'react';
import { 
    Container,
    UserProfileWrapper,
    LogoutButton,
    LogoutButtonText,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';
import { useAuth } from '../../hooks/auth';

export function Header() {
    const { user, SignOut } = useAuth();

    return(
        <Container>
            <LogoSvg width={RFValue(180)} height={RFValue(16)}/>

            <UserProfileWrapper>
                {
                    user &&
                    <LogoutButton>
                        <LogoutButtonText
                            onPress={SignOut}
                        >
                            Sair
                        </LogoutButtonText>     
                    </LogoutButton>
                }
                
                <UserPhoto
                    colors={[]}
                    avatar_uri={user ? user.avatar_url : undefined}
                />
            </UserProfileWrapper>

           
        </Container>
    )
}