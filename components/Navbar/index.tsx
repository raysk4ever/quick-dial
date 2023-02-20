import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export default function Navbar () {
  return (
    <Container>
      <Text>Hi</Text>
    </Container>
  )
}

const Container = styled.View`
  padding: 10px;
`
