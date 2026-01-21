import React, {useEffect, useState} from 'react';
import {View, Text, NativeModules, StyleSheet} from 'react-native';
// ✅ Import TurboModule (NOT NativeModules)
import HelloModule from './src/NativeHelloModule';

export default function App() {
  const [message, setMessage] = useState('');
  const [batteryLevel, setBatteryLevel] = useState<number>(0);

  useEffect(() => {
    // ✅ Direct synchronous TurboModule calls
    const msg = HelloModule.getMessage();
    const level = HelloModule.getBatteryLevel();

    setMessage(msg);
    setBatteryLevel(level);
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <View>
        <Text>
          Bettery Level is - {batteryLevel} %
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
