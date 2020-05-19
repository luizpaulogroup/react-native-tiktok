import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserAlt, faBookmark } from '@fortawesome/free-solid-svg-icons';

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

export default function Profile({ navigation }) {
    return (
        <Container>
            <UserImage>
                <FontAwesomeIcon icon={faUserAlt} size={32} color="#010101" />
            </UserImage>
            <View><UserName>@newzeland_beautiful</UserName></View>
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
                    <FontAwesomeIcon icon={faBookmark} size={20} color="#010101" />
                </ButtonFavorites>
            </EditProfile>
            <ButtonAddBio>
                <ButtonAddBioText>Tap to add bio</ButtonAddBioText>
            </ButtonAddBio>
            <BottomTabNavigator background="#010101" colorIcon="#FFF" colorTitle="#FFF" navigation={navigation} />
        </Container>
    )
}
