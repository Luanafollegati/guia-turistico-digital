import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import dados from './data/dados.json';
import ItemCard from '../components/ItemCard';

export default function PontosTuristicosScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
     
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>← Pontos Turísticos</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>
        Confira alguns pontos turísticos:
      </Text>

      <FlatList
        data={dados.pontosTuristicos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemCard
            item={item}
            onClick={() => navigation.navigate('Detalhes', { itemData: item })}
            variant="tourist"
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  back: { fontSize: 18, fontWeight: 'bold' },
  subtitle: { marginVertical: 10, color: '#666', alignItems:'center', justifyContent:'center' },
});