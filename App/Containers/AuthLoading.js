import React, { Component } from 'react'
import { AsyncStorage, ActivityIndicator, View, StatusBar, StyleSheet } from 'react-native'

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.retrieveUserDataFromStorage();
  }

  async retrieveUserDataFromStorage() {
    const storageResult = await AsyncStorage.getItem('diary-userId');

    if (storageResult && JSON.parse(storageResult).uid) {
        this.props.navigation.navigate('App');
        return;
    }
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}
