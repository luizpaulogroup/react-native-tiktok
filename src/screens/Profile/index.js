import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import { TabView, SceneMap } from 'react-native-tab-view';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserAlt, faBookmark, faBars, faLock, faHeart } from '@fortawesome/free-solid-svg-icons';

import BottomTabNavigator from '../../components/BottomTabNavigator';

import {
    Container,
    UserImage,
    UserName,
    UserFollowers,
    UserFollowersText,
    UserFollowersTextNumber,
    UserFollowersTextDesc,
    EditProfile,
    ButtonEditProfile,
    ButtonEditProfileText,
    ButtonFavorites,
    ButtonAddBio,
    ButtonAddBioText
} from './styles';

const posts = () => (
    <View style={{ width: Dimensions.get("window").width, backgroundColor: '#FFF', height: '100%' }}>
        <Text>STEP1</Text>
    </View>
);

const likeds = () => (
    <View style={{ width: Dimensions.get("window").width, backgroundColor: '#FFF', height: '100%' }}>
        <Text>STEP2</Text>
    </View>
);

const privates = () => (
    <View style={{ width: Dimensions.get("window").width, backgroundColor: '#FFF', height: '100%' }}>
        <Text>STEP2</Text>
    </View>
);

export default function Profile({ navigation }) {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'posts', title: 'posts' },
        { key: 'likeds', title: 'likeds' },
        { key: 'privates', title: 'privates' },
    ]);

    const renderScene = SceneMap({
        posts: posts,
        likeds: likeds,
        privates: privates,
    });

    return (
        <Container>
            <ScrollView>
                <UserImage>
                    <FontAwesomeIcon icon={faUserAlt} size={32} color="#333" />
                </UserImage>
                <View style={{ alignItems: 'center' }}><UserName>@tiktok</UserName></View>
                <UserFollowers>
                    <UserFollowersText>
                        <UserFollowersTextNumber>3</UserFollowersTextNumber>
                        <UserFollowersTextDesc>Following</UserFollowersTextDesc>
                    </UserFollowersText>
                    <UserFollowersText>
                        <UserFollowersTextNumber>1</UserFollowersTextNumber>
                        <UserFollowersTextDesc>Followers</UserFollowersTextDesc>
                    </UserFollowersText>
                    <UserFollowersText>
                        <UserFollowersTextNumber>0</UserFollowersTextNumber>
                        <UserFollowersTextDesc>Likes</UserFollowersTextDesc>
                    </UserFollowersText>
                </UserFollowers>
                <EditProfile>
                    <ButtonEditProfile>
                        <ButtonEditProfileText>Edit profile</ButtonEditProfileText>
                    </ButtonEditProfile>
                    <ButtonFavorites>
                        <FontAwesomeIcon icon={faBookmark} size={20} color="#333" />
                    </ButtonFavorites>
                </EditProfile>
                <ButtonAddBio>
                    <ButtonAddBioText>Tap to add bio</ButtonAddBioText>
                </ButtonAddBio>
                <TabView
                    renderTabBar={props => (
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderTopWidth: StyleSheet.hairlineWidth,
                            borderTopColor: '#E5E5E5',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderBottomColor: '#E5E5E5',
                        }}>
                            {props.navigationState.routes.map((tab, key) => (
                                <TouchableOpacity onPress={() => props.jumpTo(tab.key)} style={{ width: '33%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                    {tab.key == "posts" &&
                                        <FontAwesomeIcon icon={faBars} size={20} color={key == props.navigationState.index ? "#333" : "#E5E5E5"} />
                                    }
                                    {tab.key == "likeds" &&
                                        <FontAwesomeIcon icon={faHeart} size={20} color={key == props.navigationState.index ? "#333" : "#E5E5E5"} />
                                    }
                                    {tab.key == "privates" &&
                                        <FontAwesomeIcon icon={faLock} size={20} color={key == props.navigationState.index ? "#333" : "#E5E5E5"} />
                                    }
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                    style={{ width: Dimensions.get("window").width }}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: Dimensions.get("window").width, height: 200 }}
                />
            </ScrollView>
            <BottomTabNavigator background="#010101" colorIcon="#FFF" colorTitle="#FFF" navigation={navigation} />
        </Container>
    )
}
