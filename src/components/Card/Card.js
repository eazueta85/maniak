import React from 'react';
import styled from 'styled-components';

const Card = ({title, image, description}) => {
  return (
    <Container>
      <Title allowFontScaling={false}>{title.toUpperCase()}</Title>
      <ContentImage>
        <Image source={{uri: `${image}`}} resizeMode="cover" />
      </ContentImage>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;

const Container = styled.View`
  width: 100%;
  border-radius: 14px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin: 10px 0px;
  padding: 10px 15px;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #1e1e1e;
  text-transform: uppercase;
`;
const ContentImage = styled.View`
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin: 10px 0;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const Description = styled.Text`
  font-size: 14px;
  color: #1e1e1e;
  padding: 5px 0;
`;
