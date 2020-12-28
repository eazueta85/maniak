import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import styled from 'styled-components';
import axiosClient from '../../config/axios';
import Card from '../../components/Card/Card';
import TitleBar from '../../components/TitleBar/TitleBar';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getImages() {
      try {
        const {data: data} = await axiosClient.get('/images');
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    getImages();
  }, []);
  return (
    <Container>
      <SafeAreaView style={{flex: 1}}>
        <TitleBar navigation={navigation} />
        <FlatList
          style={{padding: 25, paddingTop: 10}}
          data={data}
          renderItem={({item}) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          )}
          keyExtractor={(item, index) => `${item.id}${index}`}
        />
      </SafeAreaView>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  height: 100%;
`;
