import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GalacticCounter = () => {
  const [stars, setStars] = useState<number>(0);
  const addStar = () => setStars((stars) => stars + 1);
  const decreaseStar = () => setStars((stars) => stars - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stars: {stars}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button onPress={addStar} title="Add" />
        <Button onPress={decreaseStar} title="Decrease" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
});

export default GalacticCounter;
