import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Discover from '../screens/Discover';
import Photo from '../screens/Photo';
import Inbox from '../screens/Inbox';
import Profile from '../screens/Profile';

import User from '../screens/User';

const Stack = createStackNavigator();

StatusBar.setHidden(true);

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => null,
                }} />
            <Stack.Screen
                name="Discover"
                component={Discover}
                options={{
                    header: () => null,
                }} />
            <Stack.Screen
                name="Photo"
                component={Photo}
                options={{
                    header: () => null,
                }} />
            <Stack.Screen
                name="Inbox"
                component={Inbox}
                options={{
                    header: () => null,
                }} />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    header: () => null,
                }} />
            <Stack.Screen
                name="User"
                component={User}
                options={{
                    header: () => null,
                }} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes;