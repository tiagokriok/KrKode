import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

interface DetailsKodeRouteParams {
  nome: string;
  cpf: string;
  nasc: string;
}

export default function DetailsKode() {
  const route = useRoute();
  const params = route.params as DetailsKodeRouteParams;

  return (
    <View style={styles.container}>
      <Text>{params.nome}</Text>
      <Text>{params.cpf}</Text>
      <Text>{params.nasc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
