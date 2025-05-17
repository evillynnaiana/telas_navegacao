import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useRouter, Link } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const idAleatorio = Math.floor(Math.random() * 100) + 1;
  return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Curriculo - Evillyn Naiane</Text>
        <View style={styles.divider} />
      </View>
      
      <Link href={`/detalhes/${idAleatorio}`} asChild>
        <Text style={styles.link}>
            Ver Detalhe do ID {idAleatorio}
        </Text>
        </Link>


      <Text style={styles.sectionTitle}>Experiências Profissionais:</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/experiencias/1')}
      >
        <Text style={styles.buttonText}>Experiência 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/experiencias/2')}
      >
        <Text style={styles.buttonText}>Experiência 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#f9f9f9'
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#8B5A2B',
    marginBottom: 10,
  },
  divider: {
    height: 3,
    width: 60,
    backgroundColor: '#8B5A2B',
    borderRadius: 10,
  },
  link: {
    color: '#8B5A2B',
    fontSize: 18,
    marginTop: 16,
    marginBottom: 30,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#8B5A2B',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
});