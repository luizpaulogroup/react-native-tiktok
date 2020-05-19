import React from 'react';
import { View, Text } from 'react-native';

import BottomTabNavigator from '../../components/BottomTabNavigator';

import { Container } from './styles';

export default function Inbox({ navigation }) {
    return (
        <Container>
            <View><Text>Inbox</Text></View>
            <BottomTabNavigator background="#222" navigation={navigation} />
        </Container>
    )
}
