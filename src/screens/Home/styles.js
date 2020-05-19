import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: red;
`;

export const NewsByFollowing = styled.View`
    position: absolute;
    left: 10%;
    right: 10%;
    top: 5%;
    z-index: 99;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NewsByFollowingText = styled.Text`
    color: #FFF;
`;

export const NewsByFollowingTextBold = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: #FFF;
`;

export const ContentRight = styled.View`
    position: absolute;
    padding: 10px;
    right: 5px;
    top: 30%;
    bottom: 30%;
    z-index: 99;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentRightUser = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: red;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentRightHeart = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentRightComment = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentRightWhatsApp = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentRightText = styled.Text`
    font-weight: bold;
    color: #FFF;
`;