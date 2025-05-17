import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Detalhes() {
  // 1. Pego o parâmetro id da URL
  const { id } = useLocalSearchParams() as { id: string };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>

        {/* Header de perfil */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>EN</Text>
          </View>
          <Text style={styles.profileTitle}>Sobre Mim</Text>

          {/* 2. Mostro o ID recebido */}
          <Text style={styles.idText}>ID recebido: {id}</Text>
        </View>
        
        {/* Cartão de descrição */}
        <View style={styles.card}>
          <Text style={styles.texto}>
            Tenho 23 anos, nasci em Laranjeiras do Sul e sou desenvolvedora de sistemas.
            Sou casada, cristã e apaixonada por tecnologia. Acredito em viver cada dia
            com intensidade e propósito.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 30,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#8B5A2B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 4,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  idText: {
    fontSize: 16,
    color: '#8B5A2B',
    marginTop: 4,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    color: '#333',
  },
});
