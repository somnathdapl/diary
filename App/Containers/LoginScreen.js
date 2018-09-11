/* Core modules */
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

/* UI modules / libraries */
import { Container, Button } from 'native-base'

/* non UI modules / libraries */
import Image from 'react-native-remote-svg'
import GoogleSignIn from 'react-native-google-sign-in'
import firebase from 'firebase'
import { bindActionCreators } from "redux";

import  {authAction}  from '../Actions/AuthAction'

class LoginScreen extends Component {
constructor(props)
{
  super(props);
}
  async loginWithGoogle() {
    await GoogleSignIn.configure({
      // iOS
      clientID: '1016862154130-utol5qtrjov0ovammh5vhiqsauanu107.apps.googleusercontent.com',
  
      // iOS, Android
      // https://developers.google.com/identity/protocols/googlescopes
      scopes: ['openid', 'email', 'profile'],
  
      // iOS, Android
      // Whether to request email and basic profile.
      // [Default: true]
      // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a06bf16b507496b126d25ea909d366ba4
      shouldFetchBasicProfile: true
    })
  
    return await GoogleSignIn.signInPromise()
      .then(data => {
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken)
        return firebase
          .auth()
          .signInAndRetrieveDataWithCredential(credential)
      })
      .then(currentUser => console.log(currentUser))
  }

  testRedux() {
    this.props.onLogin();
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Image source={require('../Images/11064.png')} style={{ height: '100%', width: '100%' }} />
          <View style={{ height: '20%', width: '100%', flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 0 }}>
            <View style={{ width: '150%', height: '120%', backgroundColor: '#ffffff', position: 'absolute', zIndex: 99, transform: [{ rotate: '-8deg' }] }}></View>
            <View style={{ width: '100%', height: '100%', zIndex: 999, position: 'absolute', bottom: -30, flexDirection: 'row', justifyContent: 'center' }}>
              <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button icon transparent onPress={() => this.testRedux()}>
                  <Image source={require('../Images/Icons/search.svg')} style={{ width: 48, height: 48 }} />
                </Button>
                <Button icon transparent >
                  <Image source={require('../Images/Icons/facebook.svg')} style={{ width: 48, height: 48 }} />
                </Button>
                <Button icon transparent >
                  <Image source={require('../Images/Icons/gmail.svg')} style={{ width: 48, height: 48 }} />
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(authAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
