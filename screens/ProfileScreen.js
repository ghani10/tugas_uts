import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text style={{ fontSize: 20, marginTop: 10 }}>Fahriza Abdul Ghani</Text>
      <Text>Email: ghanifahriza2004@gmail.com</Text>
    </View>
  );
}
