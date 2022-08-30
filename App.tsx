/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState<any>([]);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '31119641404-5isv819n2ngo7hk6jkc3tardpsde8tui.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const GSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // const {idToken} = await GoogleSignin.signIn();
      setloggedIn(true);
      setuserInfo(userInfo);
      // console.log('userInfo', userInfo);
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      // return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('e', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('e', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('e', error);
      } else {
        // some other error happened
        console.log('e', error);
      }
      // console.log('e', error);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View
      style={{
        // height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      {/* <Text style={styles.sectionTitle}>RN Quarter Goals 2</Text> */}
      <TouchableOpacity style={styles.btnStyle} onPress={GSignIn}>
        <Text>Google SignIn</Text>
      </TouchableOpacity>
      {userInfo && (
        <TouchableOpacity style={styles.signOutStyle} onPress={signOut}>
          <Text>Google Sign Out</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    height: 40,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  signOutStyle: {
    height: 40,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 8,
    marginTop: 12,
  },
});

export default App;
