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
      <text>NIM : 221011401546</text>
      <Text>Email: fahrizaabdulghani@gmail.com</Text>
      <Image
        source={{ uri: 'https://i.pravatar.cc/155?img=12' }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text style={{ fontSize: 20, marginTop: 10 }}>muhammad miftahul habaib dev</Text>
      <text>NIM : 221011402110</text>
      <Text>Email: miftahulhabaib@gmail.com</Text>
    </View>
  );
}
