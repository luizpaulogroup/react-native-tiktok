import React, { useState } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';

import Video from 'react-native-video';

import BottomTabNavigator from '../../components/BottomTabNavigator';

export default function Home({ navigation }) {

    const [paused, setPaused] = useState(false);

    const _handleStopVideo = () => {
        setPaused(true)
    }

    const videos = [
        { id: 1, url: require("../../Data/Videos/001.mp4") },
        { id: 2, url: require("../../Data/Videos/002.mp4") },
    ]

    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {videos.map(video => (
                    <View
                        key={video.id}
                        style={{ flex: 1, height: Dimensions.get("window").height, backgroundColor: '#010101' }}>
                        <Video
                            ref={ref => { this.player = video.id }}
                            style={{ flex: 1 }}
                            // onTouchStart={() => setPaused(!paused)}
                            // onTouchMove={() => setPaused(!paused)}
                            source={video.url}
                            resizeMode="cover"
                            paused={paused}
                            repeat />
                    </View>
                ))}
            </ScrollView>
            <BottomTabNavigator background="transparent" navigation={navigation} />
        </View>
    )
}
