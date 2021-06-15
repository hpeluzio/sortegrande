import React, { useEffect } from 'react';

import { Text, View } from 'react-native';

export default function Login({ navigation }) {
  useEffect(() => {
    console.log('navigation', navigation);
  }, [navigation]);

  return (
    <View>
      <Text>Sorte Grande - Login</Text>
    </View>
  );
}
