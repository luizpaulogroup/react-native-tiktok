import React, { useState } from 'react';
import { View, ScrollView, Dimensions, Image } from 'react-native';

import Video from 'react-native-video';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faHeart, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';

import BottomTabNavigator from '../../components/BottomTabNavigator';

import {
    styles,
    NewsByFollowing,
    NewsByFollowingText,
    NewsByFollowingTextBold,
    ContentRight,
    ContentRightUser,
    ContentRightUserPlus,
    ContentRightHeart,
    ContentRightComment,
    ContentRightWhatsApp,
    ContentRightWhatsAppImage,
    ContentRightText,
    ContentLeftBottom,
    ContentLeftBottomNameUser,
    ContentLeftBottomDescription,
    ContentLeftBottomMusic
} from './styles';

export default function Home({ navigation }) {

    const [paused, setPaused] = useState(false);

    const _handleStopVideo = () => {
        setPaused(true)
    }

    const videos = [
        {
            id: 1,
            url: require("../../Data/Videos/001.mp4"),
            user: "@tiktok",
            countLikes: 172,
            countComments: 111,
            countWhatsApp: 112,
            description: "No litoral da região de Marlborough, diversos fiordes, ou “sounds” como definidos na Nova Zelândia, recortam a geografia local e proporcionam diversos passeios turísticos bem fáceis de serem realizados.",
            music: "Relaxante & Musica Ambiental Clube"
        },
        {
            id: 2,
            url: require("../../Data/Videos/002.mp4"),
            user: "@tiktok",
            countLikes: 1722,
            countComments: 111,
            countWhatsApp: 112,
            description: "Marlborough.",
            music: "Regenerar-Se: Musica New Age para Relaxar e Dormir"
        },

    ]

    return (
        <View style={{ flex: 1 }}>
            <NewsByFollowing>
                <NewsByFollowingText>Following | <NewsByFollowingTextBold>For You</NewsByFollowingTextBold> </NewsByFollowingText>
            </NewsByFollowing>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                {videos.map(video => (
                    <View
                        key={video.id}
                        style={{ flex: 1, height: Dimensions.get("window").height, backgroundColor: '#010101' }}>
                        <Video
                            style={styles.backgroundVideo}
                            // onTouchStart={() => setPaused(!paused)}
                            // onTouchMove={() => setPaused(!paused)}
                            source={video.url}
                            resizeMode="cover"
                            ignoreSilentSwitch={"obey"}
                            rate={1.0}
                            paused={!paused}
                            muted={true}
                            repeat />
                        <ContentRight>
                            <ContentRightUser>
                                <FontAwesomeIcon icon={faUser} size={28} color="#FFF" />
                            </ContentRightUser>
                            <ContentRightUserPlus>
                                <FontAwesomeIcon icon={faPlus} size={12} color="#FFF" />
                            </ContentRightUserPlus>
                            <ContentRightHeart>
                                <FontAwesomeIcon icon={faHeart} size={28} color="#FFF" />
                                <ContentRightText>{video.countLikes > 1000 ? `${video.countLikes}K` : video.countLikes}</ContentRightText>
                            </ContentRightHeart>
                            <ContentRightComment>
                                <FontAwesomeIcon icon={faCommentDots} size={28} color="#FFF" />
                                <ContentRightText>{video.countComments > 1000 ? `${video.countComments}K` : video.countLikes}</ContentRightText>
                            </ContentRightComment>
                            <ContentRightWhatsApp>
                                <ContentRightWhatsAppImage source={{ uri: "https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone.png" }} />
                                <ContentRightText>{video.countWhatsApp > 1000 ? `${video.countWhatsApp}K` : video.countLikes}</ContentRightText>
                            </ContentRightWhatsApp>
                        </ContentRight>
                        <ContentLeftBottom>
                            <ContentLeftBottomNameUser numberOfLines={1}>{video.user}</ContentLeftBottomNameUser>
                            <ContentLeftBottomDescription numberOfLines={3}>{video.description}</ContentLeftBottomDescription>
                            <ContentLeftBottomMusic numberOfLines={1}>{video.music}</ContentLeftBottomMusic>
                        </ContentLeftBottom>
                    </View>
                ))}
            </ScrollView>
            <BottomTabNavigator background="transparent" colorIcon="#FFF" colorTitle="#FFF" navigation={navigation} />
        </View>
    )
}
