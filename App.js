import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Button, Icon } from 'native-base';
import Image from 'react-native-remote-svg';

export default class App extends Component {
  render() {
    return (
      <Container>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <View style={{ height: '60%', width: '100%' }}></View>
          <View style={{ height: '40%', width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
            <Button icon transparent>
              <Image source={require('./assets/icons/search.svg')} style={{ width: 64, height: 64 }} />
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});
