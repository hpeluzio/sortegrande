import React, { useEffect } from 'react';

import { Text, View } from 'react-native';

export default function Home({ navigation }) {
  useEffect(() => {
    console.log('navigation', navigation);
  }, [navigation]);

  return (
    <View>
      <Text>Sorte Grande - Home</Text>
    </View>
  );
}
