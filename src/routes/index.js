import React from 'react';
import { StatusBar, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus, faEllipsisH, faChevronLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Home from '../screens/Home';
import Discover from '../screens/Discover';
import Photo from '../screens/Photo';
import Inbox from '../screens/Inbox';
import Profile from '../screens/Profile';

import User from '../screens/User';

const Stack = createStackNavigator();

StatusBar.setHidden(true);

const Routes = () => (
    <NavigationContainer onStateChange={state => state.index == 0 ? StatusBar.setHidden(true) : StatusBar.setHidden(false)}>
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
                    headerTitle: () => <Text numberOfLines={1} style={{ maxWidth: 150, fontWeight: 'bold', fontSize: 18 }}>All activity</Text>,
                    headerLeft: () => null,
                    headerRight: () => <FontAwesomeIcon style={{ marginRight: 10 }} icon={faPaperPlane} size={25} color="#010101" />,
                }} />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerTitle: () => <Text numberOfLines={1} style={{ maxWidth: 150, fontWeight: 'bold', fontSize: 18 }}>user3782787686134324234324</Text>,
                    headerLeft: () => <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faUserPlus} size={25} color="#010101" />,
                    headerRight: () => <FontAwesomeIcon style={{ marginRight: 10 }} icon={faEllipsisH} size={25} color="#010101" />,
                }} />
            <Stack.Screen
                name="User"
                component={User}
                options={({ route, navigation }) => ({
                    headerTitle: () => <Text numberOfLines={1} style={{ maxWidth: 150, fontWeight: 'bold', fontSize: 18 }}>{route.params.user.name.replace("@", "")}</Text>,
                    headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}><FontAwesomeIcon icon={faChevronLeft} size={25} color="#010101" /></TouchableOpacity>,
                    headerRight: () => <FontAwesomeIcon style={{ marginRight: 10 }} icon={faEllipsisH} size={25} color="#010101" />,
                })} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes;