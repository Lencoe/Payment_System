import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignupScreen({ navigation }: any) {
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSignup = () => {
    if (!company || !name || !email || !password) {
      alert('Please fill all required fields');
      return;
    }
    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }} keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 60}>
        <ScrollView contentContainerStyle={styles.centerContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.card}>
            <Image source={require('../../logo/Logo.png')} style={styles.logo} />
            <Text style={styles.title}>Sign Up</Text>

            <TextInput mode="flat" placeholder="Company Name" value={company} onChangeText={setCompany} style={styles.input} left={<TextInput.Icon icon="office-building" />} />
            <TextInput mode="flat" placeholder="Name" value={name} onChangeText={setName} style={styles.input} left={<TextInput.Icon icon="account" />} />
            <TextInput mode="flat" placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" style={styles.input} left={<TextInput.Icon icon="email" />} />
            <TextInput mode="flat" placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={!showPassword} style={styles.input} left={<TextInput.Icon icon="lock" />} right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(s => !s)} />} />
            <TextInput mode="flat" placeholder="Confirm Password" value={confirm} onChangeText={setConfirm} secureTextEntry style={styles.input} left={<TextInput.Icon icon="lock-check" />} />

            <Button mode="contained" onPress={onSignup} contentStyle={styles.buttonContent} labelStyle={styles.buttonLabel} style={styles.button}>
              SIGN UP
            </Button>

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.linkWrap}>
              <Text style={styles.link}>Already have an account? Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f3f6fb', paddingHorizontal: 20 },
  centerContainer: { flexGrow: 1, justifyContent: 'center', alignItems: 'center' },
  card: { width: '100%', backgroundColor: '#fff', borderRadius: 20, padding: 25, elevation: 5 },
  logo: { width: 100, height: 100, marginBottom: 10, alignSelf: 'center', resizeMode: 'contain' },
  title: { fontSize: 24, fontWeight: '700', color: '#1776b6', marginBottom: 15, textAlign: 'center' },
  input: { backgroundColor: '#f2f2f2', marginBottom: 12 },
  button: { marginTop: 10, borderRadius: 8, backgroundColor: '#0073e6' },
  buttonContent: { paddingVertical: 10 },
  buttonLabel: { fontSize: 16, letterSpacing: 1 },
  linkWrap: { marginTop: 12, alignItems: 'center' },
  link: { color: '#1776b6' },
});
