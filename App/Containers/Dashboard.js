import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to Dashboard!</Text>
        </Content>
      </Container>
    )
  }
}
