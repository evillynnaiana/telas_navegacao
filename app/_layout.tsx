import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{ 
        headerTitleAlign: 'center', 
        headerTintColor: 'white', 
        headerStyle: { backgroundColor: '#8B5A2B' },
        headerTitleStyle: { 
          fontWeight: 'bold',
          fontSize: 20,
        },
        contentStyle: { backgroundColor: '#f9f9f9' },
        animation: 'slide_from_right',
        headerShadowVisible: true,
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ title: 'Tela Inicial' }} 
      />
      <Stack.Screen 
        name="experiencias/[id]" 
        options={{ title: 'Detalhes da Experiência' }} 
      />
      <Stack.Screen 
        name="detalhes" 
        options={{ title: 'Detalhes Pessoais' }} 
      />
    </Stack>
  );
}
