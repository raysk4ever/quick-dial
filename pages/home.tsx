import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

function HomeScreen () {
  return (
    <HomeContainer>
      <Text>Home Screen</Text>
    </HomeContainer>
  );
}

export default HomeScreen

const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 20px;
`
