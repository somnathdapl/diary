export const authAction = () => {
    return {
        type: 'LOG_IN',
        data: { userId: '123' }
    }
}

// export function onLogin() {
//     return dispatch => {
//       dispatch(loginRequest());
//          GoogleSignIn.configure({
//           // iOS
//           clientID: '1016862154130-utol5qtrjov0ovammh5vhiqsauanu107.apps.googleusercontent.com',
      
//           // iOS, Android
//           // https://developers.google.com/identity/protocols/googlescopes
//           scopes: ['openid', 'email', 'profile'],
      
//           // iOS, Android
//           // Whether to request email and basic profile.
//           // [Default: true]
//           // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a06bf16b507496b126d25ea909d366ba4
//           shouldFetchBasicProfile: true
//         })
      
//         return  GoogleSignIn.signInPromise()
//           .then(data => {
//             const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken)
//             return firebase
//               .auth()
//               .signInAndRetrieveDataWithCredential(credential)
//           })
//           .then(currentUser => console.log(currentUser))
      
        
//     };
//   } // login

//   function loginRequest() {
//     return {
//       type: LOG_IN
//     };
//   } //loginRequest
  