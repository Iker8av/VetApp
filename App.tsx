/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import LogIn from './src/components/LogIn';
import Animals from './src/components/Animals';
import RegisterAnimal from './src/components/RegisterAnimal';
import DetailAnimal from './src/components/DetailAnimal';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ViewsManager />
    </SafeAreaView>
  );
}

const ViewsManager = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const [animalData, setAnimalData] = useState(null);

  switch (viewIndex) {
    case 0:
      return <LogIn setViewIndex={setViewIndex} />;
    case 1:
      return (
        <Animals setViewIndex={setViewIndex} setAnimalData={setAnimalData} />
      );
    case 2:
      return <RegisterAnimal setViewIndex={setViewIndex} />;
    case 3:
      return (
        <DetailAnimal
          setViewIndex={setViewIndex}
          animalData={animalData}
          setAnimalData={setAnimalData}
        />
      );
    default:
      return <LogIn setViewIndex={setViewIndex} />;
  }
};

export default App;
