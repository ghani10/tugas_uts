import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

export default function DetailScreen({ route }) {
  const { film } = route.params;
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: film.image }}
        style={[styles.heroImage, { width: screenWidth, height: screenWidth * 1.2 }]}
        resizeMode="cover"
      />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{film.title}</Text>
        <Text style={styles.year}>({film.year})</Text>
        <Text style={styles.description}>{film.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroImage: {
    width: '100%',
    height: 300,
  },
  detailContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});
