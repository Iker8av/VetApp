import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export default function RegisterAnimal({setViewIndex}: any) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');

  const registerAnimal = () => {
    if (name === '' || age === '' || weight === '') {
      return;
    }

    firestore().collection('Animals').add({
      name,
      age,
      weight,
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text>Register Animal</Text>
        <Button title="Return" onPress={() => setViewIndex(1)} />
      </View>
      <View style={styles.inputsWrapper}>
        <View style={styles.inputForm}>
          <Text>Name:</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={setName}
            value={name}
          />
        </View>
        <View style={styles.inputForm}>
          <Text>Age:</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={setAge}
            value={age}
          />
        </View>
        <View style={styles.inputForm}>
          <Text>Weight:</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={setWeight}
            value={weight}
          />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Register" onPress={() => registerAnimal()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    margin: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputsWrapper: {
    gap: 25,
  },
  inputForm: {
    alignItems: 'flex-start',
    width: '100%',
    gap: 15,
  },
  inputText: {
    borderWidth: 2,
    width: '100%',
    borderRadius: 15,
  },
  buttonWrapper: {
    marginTop: 50,
  },
});
