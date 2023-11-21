import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

export default function LogIn({setViewIndex}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignUp = async () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const LogInFunc = async () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Logged In!');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.body}>
      <Text>Vet App</Text>
      <View style={styles.inputForm}>
        <Text>Email</Text>
        <TextInput style={styles.inputText} onChangeText={setEmail} />
      </View>
      <View style={styles.inputForm}>
        <Text>Password</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Log In"
          onPress={async () => {
            await LogInFunc();
            setViewIndex(1);
          }}
        />
        <Button
          title="Sign Up"
          onPress={async () => {
            await SignUp();
            setViewIndex(1);
          }}
        />
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
