import React, {useState} from 'react';
import {Formik, FormikHelpers} from 'formik';
import * as yup from 'yup';
import {
  validateRequiredCardCvv,
  validateRequiredCardExpirationDate,
  validateRequiredCardName,
  validateRequiredCardNumber,
} from '../validations/validators';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';

export type FormValues = {
  cardNumber: any;
  cardHolderName: any;
  expirationDate: any;
  cvv: any;
};

type CardFormProps = {
  initialValues: FormValues;
  loading?: boolean;
  onSaveChanges(values: FormValues, helpers: FormikHelpers<FormValues>): void;
  handleSubmit?: Function;
};

export const CardInputForm = ({
  initialValues,
  onSaveChanges,
  loading,
}: CardFormProps) => {
  const [cardNumberValue, setcardNumberValue] = useState(
    initialValues.cardNumber,
  );
  const CardValidationSchema = yup.object().shape({
    cardNumber: validateRequiredCardNumber(),
    cardHolderName: validateRequiredCardName(),
    expirationDate: validateRequiredCardExpirationDate(),
    cvv: validateRequiredCardCvv(),
  });
  const _handlingCardNumber = (num: any) => {
    const cardNumber = num
      .replace(/\s?/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim('');

    return cardNumber;
  };
  const handleChange = (text: any) => {
    const expDateFormatter =
      text.replace(/\//g, '').substring(0, 2) +
      (text.length > 2 ? '/' : '') +
      text.replace(/\//g, '').substring(2, 6);
    var res = expDateFormatter.split('/');
    const year = new Date().getFullYear();
    if (
      parseInt(res[0]) >= 1 &&
      parseInt(res[0]) <= 12 &&
      parseInt(res[1]) > year
    )
      return expDateFormatter;
    else if (expDateFormatter.length == 7) Alert.alert('Invalid month or Year');
    return expDateFormatter;
  };
  return (
    <Formik<FormValues>
      initialValues={{...initialValues}}
      validationSchema={CardValidationSchema}
      onSubmit={onSaveChanges}
      enableReinitialize>
      {({handleSubmit, values, setFieldValue, errors, touched}) => {
        return (
          <View style={styles.container}>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Enter card number"
                value={values.cardNumber}
                maxLength={19}
                keyboardType={'number-pad'}
                onChangeText={text => {
                  setFieldValue('cardNumber', _handlingCardNumber(text));
                }}
              />
              {errors.cardNumber && touched.cardNumber && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.cardNumber}
                </Text>
              )}
              <TextInput
                style={styles.input}
                placeholder="Enter cardholder name"
                value={values.cardHolderName}
                onChangeText={text => {
                  setFieldValue('cardHolderName', text);
                }}
              />
              {errors.cardHolderName && touched.cardHolderName && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.cardHolderName}
                </Text>
              )}
              <View style={styles.exp}>
                <TextInput
                  style={{...styles.input, width: '40%'}}
                  placeholder="Enter expiry"
                  keyboardType="number-pad"
                  onChangeText={text => {
                    setFieldValue('expirationDate', handleChange(text));
                  }}
                  value={values.expirationDate}
                />
                {errors.expirationDate && touched.expirationDate && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.expirationDate}
                  </Text>
                )}
                <TextInput
                  style={{...styles.input, width: '40%'}}
                  placeholder="Enter cvv"
                  keyboardType="number-pad"
                  maxLength={3}
                  secureTextEntry
                  value={values.cvv}
                  onChangeText={text => {
                    setFieldValue('cvv', text);
                  }}
                />
                {errors.cvv && touched.cvv && (
                  <Text style={{fontSize: 20, color: 'red'}}>{errors.cvv}</Text>
                )}
              </View>
              <View style={styles.btnContainer}>
                <View style={styles.btn}>
                  <Button
                    title="Save"
                    onPress={handleSubmit as any}
                    color="black"
                  />
                </View>
                <View style={styles.btn}>
                  <Button title="Cancel" onPress={() => {}} color="black" />
                </View>
              </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },
  form: {
    marginTop: 20,
  },
  btn: {
    width: '45%',
    height: 40,
    borderRadius: 50,
    marginTop: 60,
    borderWidth: 1,
    backgroundColor: 'blue',
  },
  btnContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
  },
  exp: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
});
