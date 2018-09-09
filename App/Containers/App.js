/* Core modules */
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'

/* non UI third party modules */
import firebase from 'firebase';

/* app navigation stack */
import { AppWithNavigationState } from '../Navigation/AppNavigation'
import createStore from '../Redux'

/* Firebase initialization */
import { FIREBASE_CONF } from '../Config/FirebaseConfig'
firebase.initializeApp(FIREBASE_CONF)

/* Create our store */
const store = createStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppWithNavigationState />
        </SafeAreaView>
      </Provider>
    )
  }
}