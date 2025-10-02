import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Company Logo */}
      <Image source={require('../logo/Logo.png')} style={styles.logo} />

      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          mode="outlined"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          left={<TextInput.Icon icon={() => <MaterialCommunityIcons name="account" size={20} />} />}
        />

        <TextInput
          mode="outlined"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          left={<TextInput.Icon icon={() => <MaterialCommunityIcons name="lock" size={20} />} />}
        />

        <Button
          mode="contained"
          style={styles.button}
          onPress={() => alert('Login pressed')} // Replace with login logic
        >
          LOGIN
        </Button>

        <TouchableOpacity
          style={styles.signupLinkWrap}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.signupLink}>
            Don’t have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4da6ff', justifyContent: 'center', alignItems: 'center' },
  logo: { width: 120, height: 120, marginBottom: 20, resizeMode: 'contain' },
  loginBox: { width: '85%', backgroundColor: 'white', borderRadius: 10, padding: 20, elevation: 4, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#1a1a1a' },
  input: { marginBottom: 15, backgroundColor: '#f5f5f5' },
  button: { marginTop: 10, paddingVertical: 5, backgroundColor: '#0073e6' },
  signupLinkWrap: { marginTop: 15, alignItems: 'center' },
  signupLink: { color: '#0073e6', fontWeight: '500' },
});
