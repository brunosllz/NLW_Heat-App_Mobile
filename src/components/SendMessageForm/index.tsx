import React, { useState }  from 'react';
import { Alert, Keyboard } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Button } from '../Button';
import {
    Container,
    TextInput
} from './styles';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendMessage, setSendMessage] = useState(false);
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
            Alert.alert('Escreva a messagem para enviar.');
        }   
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
        </Container>
    )
}