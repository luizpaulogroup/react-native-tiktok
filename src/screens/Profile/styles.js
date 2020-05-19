import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

export const UserImage = styled.View`
    margin-top: 15px;
    width: 70px;
    height: 70px;
    border-radius: 50px;
    border-width: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const UserName = styled.Text`
    margin-top: 20px;
    font-weight: bold;
`;

export const UserFollowers = styled.View`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UserFollowersText = styled.View`
    width: 30%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const UserFollowersTextNumber = styled.Text`
    color: #010101;
    font-weight: bold;
`;

export const UserFollowersTextDesc = styled.Text`
    color: #010101;
`;

export const EditProfile = styled.View`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ButtonEditProfile = styled.TouchableOpacity`
    width: 200px;
    height: 52px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: solid 1px #010101;
    padding: 15px;
`;

export const ButtonEditProfileText = styled.Text`
    color: #010101;
`;

export const ButtonFavorites = styled.TouchableOpacity`
    margin-left: 10px;
    display: flex;
    height: 52px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: solid 1px #010101;
    padding: 15px;
`;

export const ButtonAddBio = styled.TouchableOpacity`
    margin-left: 10px;
    display: flex;
    height: 52px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

export const ButtonAddBioText = styled.Text`
    color: #333;
`;