import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function DetalhesScreen({ route, navigation }) {
  const itemData = route?.params?.itemData;

  if (!itemData) {
    return <Text>Erro ao carregar dados</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Image source={{ uri: itemData.imagem }} style={styles.image} />

        <Text style={styles.title}>{itemData.nome}</Text>
        <Text style={styles.desc}>{itemData.descricao}</Text>

        <Text style={styles.location}>
          📍 {itemData.localizacao}
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  backButton: {
    margin: 16,
  },

  backText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  image: {
    width: '100%',
    height: 200,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },

  desc: {
    marginHorizontal: 16,
    color: '#555',
  },

  location: {
    margin: 16,
    fontWeight: 'bold',
  },
});