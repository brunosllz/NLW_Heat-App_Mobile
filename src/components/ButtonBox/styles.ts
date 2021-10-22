import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled(GestureHandlerRootView)`
    width: 100%;

    padding: 0 ${RFValue(20)}px;
    padding-bottom: ${getBottomSpace() + RFValue(32)}px;
`;