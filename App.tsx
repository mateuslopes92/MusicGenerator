import { StyleSheet, Text, View } from 'react-native';

import Lottie from 'lottie-react-native';
import React from 'react';

const MusicGenerator: React.FC = () => {
  return (
    <View style={styles.container}>
      <Lottie
        style={styles.animation}
        source={require('./assets/astronaut.json')}
        autoPlay
        loop
      />
      <Text style={styles.title}>Music Generator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  animation: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 20,
  },
});

export default MusicGenerator;
