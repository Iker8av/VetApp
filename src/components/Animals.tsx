import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

type Animal = {age: number; name: string; weight: number};

export default function Animals({setViewIndex, setAnimalData}: any) {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [animalsLoaded, setAnimalsLoaded] = useState(false);

  useEffect(() => {
    firestore()
      .collection('Animals')
      .onSnapshot(querySnapshot => {
        const updateAnimals: any[] = [];
        querySnapshot.forEach(docActual => {
          updateAnimals.push({...docActual.data()});
        });

        setAnimals(updateAnimals);
        setAnimalsLoaded(true);
      });
  }, []);

  const LogOut = async () => {
    auth().signOut();
  };

  if (!animalsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text>Animals</Text>
        <View style={styles.headerRow}>
          <Button
            title="Log Out"
            onPress={async () => {
              await LogOut();
              setViewIndex(0);
            }}
          />
          <Button title="Register" onPress={() => setViewIndex(2)} />
        </View>
      </View>
      <FlatList
        data={animals}
        renderItem={({item}) => (
          <View style={styles.row}>
            <Text>{item.name}</Text>
            <View style={styles.animalDetails}>
              <Button
                title="Details"
                onPress={() => {
                  setAnimalData(item);
                  setViewIndex(3);
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
  },
  animalDetails: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    gap: 10,
  },
  column: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
