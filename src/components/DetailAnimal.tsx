import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

export default function DetailAnimal({
  setViewIndex,
  animalData,
  setAnimalData,
}: any) {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text>Details of: {animalData.name}</Text>
        <Button
          title="Return"
          onPress={async () => {
            setAnimalData(null);
            setViewIndex(1);
          }}
        />
      </View>
      <View style={styles.content}>
        <Text>Name: {animalData.name}</Text>
        <Text>Age: {animalData.age}</Text>
        <Text>Weight: {animalData.weight}</Text>
      </View>
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
  content: {
    alignItems: 'center',
    marginTop: 50,
    gap: 10,
  },
});
