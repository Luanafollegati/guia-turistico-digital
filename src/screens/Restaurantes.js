import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import dados from './data/dados.json';
import ItemCard from '../components/ItemCard';

const FILTERS = ['Todos', 'Churrasco', 'Frutos do Mar'];

export default function RestaurantesScreen() {
  const navigation = useNavigation();
  const [filtro, setFiltro] = useState('Todos');

  const lista =
    filtro === 'Todos'
      ? dados.restaurantes
      : dados.restaurantes.filter((r) => r.categoria === filtro);

  return (
    <SafeAreaView style={styles.container}>
     
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>← Restaurantes</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>
        Confira alguns restaurantes:
      </Text>

      <ScrollView horizontal style={{ marginVertical: 10 }}>
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f}
            onPress={() => setFiltro(f)}
            style={[
              styles.filter,
              filtro === f && styles.filterActive,
            ]}
          >
            <Text style={{ color: filtro === f ? '#fff' : '#000' }}>
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemCard
            item={item}
            onClick={() => navigation.navigate('Detalhes', { itemData: item })}
            variant="restaurant"
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  back: { fontSize: 18, fontWeight: 'bold' },
  subtitle: { color: '#666' },

  filter: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 10,
  },

  filterActive: {
    backgroundColor: '#005580',
  },
});