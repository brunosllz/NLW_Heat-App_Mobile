import React from 'react';
import { 
  Container,
  KeyboardUpIphone,
  SendMessageContainer ,
  TouchableDimiss
} from './styles';
import { Modal, Platform, View, TouchableWithoutFeedback } from 'react-native';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { ButtonBox } from '../../components/ButtonBox';
import { SendMessageForm } from '../../components/SendMessageForm';
import { useAuth } from '../../hooks/auth';


export function Home() {
  const { ModalIsOpen, setModalIsOpen } = useAuth();

  return (
    <KeyboardUpIphone
      behavior={ Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <Header />

        <MessageList />

       <ButtonBox />
      
      </Container>
        <Modal
          visible={ModalIsOpen}
          onRequestClose={() => !ModalIsOpen}
          transparent
        >
            <SendMessageContainer style={{flex: 1, justifyContent: 'flex-end'}}>
              <TouchableWithoutFeedback onPress={() =>  setModalIsOpen(!ModalIsOpen)}>
                <TouchableDimiss />
              </TouchableWithoutFeedback>

              <SendMessageForm />
            </SendMessageContainer>
        </Modal>
    </KeyboardUpIphone>
  )
}

