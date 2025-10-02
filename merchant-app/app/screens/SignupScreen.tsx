import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

export default function SignupScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSignup = () => {
    if (!name || !email || !password) {
      alert('Please fill name, email and password');
      return;
    }
    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }
    console.log({ name, email });
    navigation.navigate('Login'); // Navigate back to login after signup
  };

  return (
    <View style={styles.container}>
      {/* Company Logo */}
      <Image source={require('../logo/Logo.png')} style={styles.logo} />

      <View style={styles.card}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput mode="flat" placeholder="Name" value={name} onChangeText={setName} style={styles.input} left={<TextInput.Icon icon="account" />} />
        <TextInput mode="flat" placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" style={styles.input} left={<TextInput.Icon icon="email" />} />
        <TextInput mode="flat" placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={!showPassword} style={styles.input} left={<TextInput.Icon icon="lock" />} right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword((s) => !s)} />} />
        <TextInput mode="flat" placeholder="Confirm Password" value={confirm} onChangeText={setConfirm} secureTextEntry style={styles.input} left={<TextInput.Icon icon="lock-check" />} />

        <Button mode="contained" onPress={onSignup} contentStyle={styles.buttonContent} labelStyle={styles.buttonLabel} style={styles.button}>
          SIGN UP
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLinkWrap}>
          <Text style={styles.loginLink}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4da6ff', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 },
  logo: { width: 120, height: 120, marginBottom: 20, resizeMode: 'contain' },
  card: { width: '88%', backgroundColor: '#fff', borderRadius: 14, paddingVertical: 24, paddingHorizontal: 20, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, shadowOffset: { width: 0, height: 6 }, elevation: 6 },
  title: { fontSize: 26, fontWeight: '600', marginBottom: 18, color: '#1776b6' },
  input: { backgroundColor: '#f2f2f2', height: 52, borderRadius: 8, marginBottom: 12 },
  button: { borderRadius: 8, marginTop: 8 },
  buttonContent: { paddingVertical: 10 },
  buttonLabel: { fontSize: 16, letterSpacing: 2 },
  loginLinkWrap: { marginTop: 14, alignItems: 'center' },
  loginLink: { color: '#1776b6' },
});
