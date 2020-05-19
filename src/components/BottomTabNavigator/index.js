import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faInbox, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Tab, Button, Title, Add } from './styles';

export default function BottomTabNavigator({ navigation, background }) {
    return (
        <Tab background={background}>
            <Button onPress={() => navigation.navigate("Home")}>
                <FontAwesomeIcon icon={faHome} size={28} color="#FFF" />
                <Title>Home</Title>
            </Button>
            <Button onPress={() => navigation.navigate("Discover")}>
                <FontAwesomeIcon icon={faSearch} size={28} color="#FFF" />
                <Title>Discover</Title>
            </Button>
            <Button onPress={() => navigation.navigate("Photo")}>
                <Add>
                    <FontAwesomeIcon icon={faPlus} size={20} color="#000" />
                </Add>
            </Button>
            <Button onPress={() => navigation.navigate("Inbox")}>
                <FontAwesomeIcon icon={faInbox} size={28} color="#FFF" />
                <Title>Inbox</Title>
            </Button>
            <Button onPress={() => navigation.navigate("Profile")}>
                <FontAwesomeIcon icon={faUser} size={28} color="#FFF" />
                <Title>Me</Title>
            </Button>
        </Tab>
    )
}
