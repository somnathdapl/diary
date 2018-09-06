import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Button, Icon } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Content style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <Button icon transparent>
            <Icon type="FontAwesome" name="google" />
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});
