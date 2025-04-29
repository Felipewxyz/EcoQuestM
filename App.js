import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const API_URL = "https://curly-space-trout-4vjgjx6qwq5hqp66-3000.app.github.dev"
    const ENDPOINT = "/api/user"
    const response = await fetch(API_URL + ENDPOINT);
    const json = await response.json();
    setData(json);
  }

  return (
    <View style={styles.container}>
      <Text>Carregar dados do servidor</Text>
      {
        data?.map(item => {
          return (
            <Text key={item.id}>{item.username}</Text>
          )
        })
      }
      <Button title="Carregar Dados" onPress={fetchData}></Button>
            <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
