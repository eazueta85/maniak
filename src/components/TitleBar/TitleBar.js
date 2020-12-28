import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components';

const TitleBar = ({navigation}) => {
  const logo = '../../assets/images/logo.png';
  return (
    <Container>
      <TitleWrapper>
        <Image source={require(logo)} />
        <Title>Welcome back.</Title>
      </TitleWrapper>
      <ButtonWrapper>
        <Pressable onPress={() => navigation.navigate('Logout')}>
          <Title>Logout</Title>
        </Pressable>
      </ButtonWrapper>
    </Container>
  );
};

export default TitleBar;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 0 25px;
`;
const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
  margin-left: 10px;
`;
const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
const ButtonWrapper = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;
