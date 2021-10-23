import React, { useState }  from 'react';
import {
    Container,
    TextInput,
    AlertContainer
} from './styles';
import { Alert, Keyboard, Modal } from 'react-native';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { AlertModal } from '../AlertModal';
import { Button } from '../Button';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendMessage, setSendMessage] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const { setModalIsOpen, ModalIsOpen } = useAuth();
    
    async function handleMessageSubmit() {
        const messageFormatted = message.trim();

        if(messageFormatted.length > 0) {
            setSendMessage(true); 
            await api.post('/messages', { message: messageFormatted });

            setMessage('');
            setSendMessage(false);

            setModalIsOpen(!ModalIsOpen);
            Keyboard.dismiss();
        }else{
            setOpenAlert(!openAlert)
        }   
    }

    function handleCloseAlert() {
        setOpenAlert(!openAlert);
    }

    return(
        <Container>
           <TextInput
                style={{textAlignVertical: 'top'}}
                keyboardAppearance="dark"
                placeholder="Qual a sua expectativa para o evento?"
                maxLength={140}
                multiline
                onChangeText={setMessage}
                value={message}
                editable={!sendMessage}
           />

           <Button
                title="ENVIAR MENSAGEM"
                backgroundColor="pink"
                color="white"
                onPress={handleMessageSubmit}
                isLoading={sendMessage}
           />

                <Modal
                    animationType='fade'
                    visible={openAlert}
                    onRequestClose={handleCloseAlert}
                    transparent
                >
                    <AlertContainer>
                        <AlertModal
                            title="Insira a sua messagem!"
                            buttonText="CONTINUAR"
                            onPress={handleCloseAlert}
                        />
                    </AlertContainer>
                </Modal>
        </Container>
    )
}