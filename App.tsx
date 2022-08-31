/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {CardInputForm, FormValues} from './src/screens/CardInputForm';

const App = () => {
  const initialValues = {
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
  };
  const onSave = (val: FormValues) => {
    console.log('val', val);
  };
  return (
    <SafeAreaView>
      <CardInputForm
        initialValues={initialValues}
        onSaveChanges={onSave}
        loading={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  //
});

export default App;
