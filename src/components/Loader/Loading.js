import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import {Animated, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;

const Loading = ({isActive}) => {
  const LottieRef = useRef(null);
  const top = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isActive) {
      Animated.timing(top, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
      Animated.timing(opacity, {toValue: 1, useNativeDriver: false}).start();

      LottieRef.current.play();
    } else {
      Animated.timing(top, {
        toValue: screenHeight,
        duration: 0,
        useNativeDriver: false,
      }).start();
      Animated.timing(opacity, {toValue: 0, useNativeDriver: false}).start();

      LottieRef.current.loop = false;
    }
  }, [isActive]);

  return (
    <AnimatedContainer style={{top: top, opacity: opacity}}>
      <LottieView
        source={require('../../assets/images/lottie-loading.json')}
        autoPlay={false}
        loop={true}
        ref={LottieRef}
      />
    </AnimatedContainer>
  );
};

export default Loading;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #fff;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
