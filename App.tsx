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
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const onPay = () => {
    let options = {
      description: 'Samsung Charger Buy',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_dmIrdI3U7fcCe0', // Your api key
      amount: '1000',
      name: 'Akki',
      prefill: {
        email: 'abc@razorpay.com',
        contact: '8989898978',
        name: 'RazorPay Payment Integration Test ',
      },
      theme: {color: '#F37254'},
      // to hide payment options
      method: {
        netbanking: false,
        card: true,
        wallet: false,
        upi: true,
        paylater: false,
      },
    };
    RazorpayCheckout.open(options)
      .then((data: any) => {
        // handle success
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error: any) => {
        // handle failure
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <TouchableOpacity onPress={onPay} style={styles.btn}>
        <Text>Pay</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});

export default App;
