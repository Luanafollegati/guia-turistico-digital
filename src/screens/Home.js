import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import dados from './data/dados.json';
import ItemCard from '../components/ItemCard';

export default function HomeScreen() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleClick = (item) => {
    navigation.navigate('Detalhes', { itemData: item });
  };

  // mistura pontos + restaurantes (como na imagem)
  const lista = [
    ...dados.pontosTuristicos,
    ...dados.restaurantes,
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
     
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer}>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.logo}>Explora Brasil</Text>

       
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemCard item={item} onClick={() => handleClick(item)} />
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'd#bdbdb' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'orange',
  },

  menu: { fontSize: 24 },
  logo: { 
    fontWeight: 'bold', 
    alignItems: 'center', justifyContent: 'center' },
});