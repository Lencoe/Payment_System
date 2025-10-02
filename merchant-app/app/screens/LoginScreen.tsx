import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }
    // TODO: Add real auth logic later
    navigation.navigate('MerchantDashboard');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../logo/Logo.png')} style={styles.logo} />

      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          mode="flat"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          left={<TextInput.Icon icon="email" />}
        />
        <TextInput
          mode="flat"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          left={<TextInput.Icon icon="lock" />}
        />

        <Button
          mode="contained"
          onPress={onLogin}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          style={styles.button}
        >
          LOGIN
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signupLinkWrap}>
          <Text style={styles.signupLink}>Don’t have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4da6ff', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 },
  logo: { width: 120, height: 120, marginBottom: 20, resizeMode: 'contain' },
  card: { width: '88%', backgroundColor: '#fff', borderRadius: 14, paddingVertical: 24, paddingHorizontal: 20, elevation: 6 },
  title: { fontSize: 26, fontWeight: '600', marginBottom: 18, color: '#1776b6' },
  input: { backgroundColor: '#f2f2f2', height: 52, borderRadius: 8, marginBottom: 12 },
  button: { marginTop: 10, paddingVertical: 5, backgroundColor: '#0073e6', borderRadius: 8 },
  buttonContent: { paddingVertical: 10 },
  buttonLabel: { fontSize: 16, letterSpacing: 2 },
  signupLinkWrap: { marginTop: 14, alignItems: 'center' },
  signupLink: { color: '#1776b6' },
});
