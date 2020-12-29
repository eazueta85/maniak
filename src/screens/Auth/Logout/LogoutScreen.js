import React from 'react';
import {Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../../store/auth/action';
import styled from 'styled-components';

const LogoutScreen = () => {
  const logo = '../../../assets/images/logo.png';

  //Actions
  const dispatch = useDispatch();
  const sendLogout = () => dispatch(logOut());

  return (
    <Container>
      <Image source={require(logo)} />
      <Title>Thanks Maniak</Title>
      <Button onPress={() => sendLogout()}>
        <TextButton allowFontScaling={false}>
          {'Logout'.toUpperCase()}
        </TextButton>
      </Button>
    </Container>
  );
};

export default LogoutScreen;

const Container = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin-bottom: 20px;
`;
const Title = styled.Text`
  font-size: 32px;
  color: #b8bece;
  font-weight: 500;
  margin-left: 10px;
`;
const Button = styled(Pressable)`
  background-color: #427b73;
  width: 250px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: 30px;
`;
const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
`;
