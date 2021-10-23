import React,{useState, useEffect} from 'react';
import {
    Container
} from './styles';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { Message, MessageProps } from '../Message';
import { api } from '../../services/api';
import { io } from 'socket.io-client';
import { MESSAGES_EXAMPLE } from '../../utils/messages';

let messageQueue: MessageProps[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage) => {
    messageQueue.push(newMessage);
});

export function MessageList() {
    const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

    useEffect(() => {
        async function fetchMessages() {
            const messageResponse = await api.get<MessageProps[]>('/messages/last3');
            setCurrentMessages(messageResponse.data);
        }

        fetchMessages();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if(messageQueue.length > 0) {
                setCurrentMessages(prevState => 
                [
                    messageQueue[0], 
                    prevState[0], 
                    prevState[1]
                ].filter(Boolean));
                messageQueue.shift();
            }
        }, 3000);

        return () => clearInterval(timer);
    }, [])

    return(
        <Container
            contentContainerStyle={{
                paddingTop: RFPercentage(15),
                paddingBottom: RFValue(184)
            }}
            keyboardShouldPersistTaps="never"
        >
            {currentMessages.map(message => <Message key={message.id} data={message}/>)}
        
        </Container>
    )
}