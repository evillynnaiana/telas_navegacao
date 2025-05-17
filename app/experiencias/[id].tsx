import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Experiencias() {
  const params = useLocalSearchParams();
  let id = params.id;

  if (Array.isArray(id)) {
    id = id[0];
  }

  const idNum = Number(id);

  const experiencias: { 
    [key: number]: {
      empresa: string;
      cargo?: string;
      periodo?: string;
      descricao: string;
    }
  } = {
    1: {
      empresa: 'Tech Solutions',
      cargo: 'Desenvolvedora Front-end',
      periodo: 'Jan 2022 - Dez 2023',
      descricao:
        'Desenvolvimento de interfaces web utilizando React e TypeScript, garantindo responsividade e acessibilidade.',
    },
    2: {
      empresa: 'Innovatech',
      cargo: 'Engenheira de Software',
      periodo: 'Mar 2020 - Dez 2021',
      descricao:
        'Implementação de APIs RESTful com Node.js, além da manutenção e otimização de bancos de dados SQL.',
    },
  };

  const experiencia = experiencias[idNum] || {
    empresa: 'Experiência não encontrada',
    descricao: 'Nenhuma informação disponível para essa experiência.',
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.empresa}>{experiencia.empresa}</Text>
          <View style={styles.divider} />
          
          {experiencia.cargo && (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Cargo:</Text>
              <Text style={styles.cargo}>{experiencia.cargo}</Text>
            </View>
          )}
          
          {experiencia.periodo && (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Período:</Text>
              <Text style={styles.periodo}>{experiencia.periodo}</Text>
            </View>
          )}
          
          <View style={styles.descricaoContainer}>
            <Text style={styles.descricaoLabel}>Descrição:</Text>
            <Text style={styles.descricao}>{experiencia.descricao}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
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
    marginTop: 20,
  },
  empresa: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#8B5A2B',
    textAlign: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: '#f0f0f0',
    width: '100%',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginRight: 8,
    width: 70,
  },
  cargo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  periodo: {
    fontSize: 16,
    color: '#555',
    fontStyle: 'italic',
    flex: 1,
  },
  descricaoContainer: {
    marginTop: 16,
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
  },
  descricaoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});