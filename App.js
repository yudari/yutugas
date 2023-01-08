import { StatusBar } from 'expo-status-bar';
import { View, Text,NativeBaseProvider } from 'native-base';
import Routes from './src/routes';


export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
