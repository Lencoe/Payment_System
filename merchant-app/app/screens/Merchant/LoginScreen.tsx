import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = () => {
    if (!email || !password) {
      alert('Please fill in email and password');
      return;
    }
    navigation.navigate('MerchantDashboard');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 60}
      >
        <ScrollView contentContainerStyle={styles.centerContainer} keyboardShouldPersistTaps="handled">
          {/* Logo on top like Signup */}
          <Image
            source={require('../../logo/Logo.png')} // same as Signup
            style={styles.logo}
          />

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
              secureTextEntry={!showPassword}
              style={styles.input}
              left={<TextInput.Icon icon="lock" />}
              right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(s => !s)} />}
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

            <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.linkWrap}>
              <Text style={styles.link}>Don't have an account? Sign Up</Text>
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
  logo: { width: 140, height: 140, marginBottom: 20, resizeMode: 'contain' }, // like Signup
  card: { width: '88%', backgroundColor: '#fff', borderRadius: 20, padding: 25, elevation: 5 },
  title: { fontSize: 24, fontWeight: '700', color: '#1776b6', marginBottom: 15, textAlign: 'center' },
  input: { backgroundColor: '#f2f2f2', marginBottom: 12 },
  button: { marginTop: 10, borderRadius: 8, backgroundColor: '#0073e6' },
  buttonContent: { paddingVertical: 10 },
  buttonLabel: { fontSize: 16, letterSpacing: 1 },
  linkWrap: { marginTop: 12, alignItems: 'center' },
  link: { color: '#1776b6' },
});
