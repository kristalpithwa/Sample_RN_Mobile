import React from 'react';
import {LogBox} from 'react-native';
import RouterComponent from './src/Router/Router';
import {AuthProvider} from './src/Context/Context';

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <AuthProvider>
      <RouterComponent />
    </AuthProvider>
  );
}
