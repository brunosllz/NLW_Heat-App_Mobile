import React from 'react';
import { Button } from '../Button';
import {
    Container,
} from './styles';

import { useAuth } from '../../hooks/auth';

export function ButtonBox() {
    const { SignIn, isSignin, user, setModalIsOpen, ModalIsOpen } = useAuth();

    function handleModalOpen() {
        setModalIsOpen(!ModalIsOpen)
    }

    return(
        <Container>
            {
                user ?
                    <Button 
                        title="ENVIAR MESSAGEM"
                        color='white'
                        backgroundColor='pink'
                        onPress={handleModalOpen}
                    />
                    :
                    <Button 
                        title="ENTRAR COM GITHUB"
                        icon
                        onPress={SignIn}
                        isLoading={isSignin}
                    />
            }
        </Container>
    )
}