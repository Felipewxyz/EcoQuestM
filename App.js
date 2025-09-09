import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';


export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDataGet = async () => {
    const API = "http://192.168.0.109:3000/api";
    const URL = `${API}/user`;
    setLoading(true);

    try {
      const response = await fetch(URL);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDataPost = async () => {
    const API_URL = "http://192.168.0.109:3000";
    const ENDPOINT = "/api/user";
    const body = {
      username: "usuario1",
      email: "usuario@teste.com.br"
    };
    const response = await fetch(API_URL + ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const json = await response.json();
    console.log(json);
  }

  return (
    <View style={styles.container}>
      <Text>Projeto TCC - Turma B</Text>
      <View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button title="Buscar Dados" onPress={fetchDataGet}></Button>
        )}
      </View>
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
