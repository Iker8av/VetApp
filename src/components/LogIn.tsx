import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React from 'react';

export default function LogIn() {
  return (
    <View style={styles.body}>
      <Text>Vet App</Text>
      <View style={styles.inputForm}>
        <Text>Email</Text>
        <TextInput style={styles.inputText} />
      </View>
      <View style={styles.inputForm}>
        <Text>Password</Text>
        <TextInput style={styles.inputText} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Log In" />
        <Button title="Sign Up" />
      </View>
      <View style={styles.members}>
        <Text>Alumnos:</Text>
        <Text>Iker Ochoa Villaseñor - A01640984</Text>
        <Text>Mariana Bustos Hernandez - A01641324</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    marginTop: 100,
    gap: 50,
  },
  inputForm: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 25,
    gap: 15,
  },
  inputText: {
    borderWidth: 2,
    width: '100%',
    borderRadius: 15,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 25,
  },
  members: {
    alignItems: 'center',
  },
});
