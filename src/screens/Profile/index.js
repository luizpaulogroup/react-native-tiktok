import React from 'react';
import { View, Text } from 'react-native';

import BottomTabNavigator from '../../components/BottomTabNavigator';

import { Container } from './styles';

export default function Profile({ navigation }) {
    return (
        <Container>
            <View><Text>Profile</Text></View>
            <BottomTabNavigator background="#222" navigation={navigation} />
        </Container>
    )
}
