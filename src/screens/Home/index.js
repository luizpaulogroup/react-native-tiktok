import React, { useState } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';

import Video from 'react-native-video';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faHeart, faCommentDots } from '@fortawesome/free-solid-svg-icons';

import BottomTabNavigator from '../../components/BottomTabNavigator';

import {
    NewsByFollowing,
    NewsByFollowingText,
    NewsByFollowingTextBold,
    ContentRight,
    ContentRightUser,
    ContentRightHeart,
    ContentRightComment,
    ContentRightWhatsApp,
    ContentRightText
} from './styles';

export default function Home({ navigation }) {

    const [paused, setPaused] = useState(false);

    const _handleStopVideo = () => {
        setPaused(true)
    }

    const videos = [
        { id: 1, url: require("../../Data/Videos/001.mp4") },
        // { id: 2, url: require("../../Data/Videos/002.mp4") },
    ]

    return (
        <View style={{ flex: 1 }}>
            <NewsByFollowing>
                <NewsByFollowingText>Following | <NewsByFollowingTextBold>For You</NewsByFollowingTextBold> </NewsByFollowingText>
            </NewsByFollowing>
            <ContentRight>
                <ContentRightUser>
                    <FontAwesomeIcon icon={faPlus} size={28} color="#FFF" />
                </ContentRightUser>
                <ContentRightHeart>
                    <FontAwesomeIcon icon={faHeart} size={28} color="#FFF" />
                    <ContentRightText>15,6K</ContentRightText>
                </ContentRightHeart>
                <ContentRightComment>
                    <FontAwesomeIcon icon={faCommentDots} size={28} color="#FFF" />
                    <ContentRightText>214</ContentRightText>
                </ContentRightComment>
                <ContentRightWhatsApp>
                    <FontAwesomeIcon icon={faCommentDots} size={28} color="#FFF" />
                    <ContentRightText>645</ContentRightText>
                </ContentRightWhatsApp>
            </ContentRight>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                {videos.map(video => (
                    <View
                        key={video.id}
                        style={{ flex: 1, height: Dimensions.get("window").height, backgroundColor: '#010101' }}>
                        <Video
                            style={{ flex: 1 }}
                            // onTouchStart={() => setPaused(!paused)}
                            // onTouchMove={() => setPaused(!paused)}
                            source={video.url}
                            resizeMode="cover"
                            paused={!paused}
                            repeat />
                    </View>
                ))}
            </ScrollView>
            <BottomTabNavigator background="transparent" navigation={navigation} />
        </View>
    )
}
