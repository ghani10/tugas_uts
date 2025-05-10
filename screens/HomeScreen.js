import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Button, Dimensions } from 'react-native';
import { films } from '../data/films';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns - 20;

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        width: itemWidth,
        elevation: 3,
      }}
      onPress={() => navigation.navigate('Detail', { film: item })}
    >
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 150 }} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
        <Text style={{ color: 'gray' }}>{item.year}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <Button title="Profil Saya" onPress={() => navigation.navigate('Profile')} />
      <FlatList
        data={films}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
}
