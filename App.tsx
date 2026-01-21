import React, {useEffect, useState} from 'react';
import {View, Text, NativeModules, StyleSheet} from 'react-native';

 // 👇 Correct native module types (SYNC)
type HelloModuleType = {
  getMessage: () => string;
  getBatteryLevel: () => number;
};

// 👇 Extract & type it
const {HelloModule} = NativeModules as {
  HelloModule: HelloModuleType;
};

export default function App() {
  const [msg, setMsg] = useState('Loading...');
  const [betterylevel , setBetterylevel] = useState<number>(0);
   

  useEffect(() => {
    try {
      // ✅ synchronous calls
      const message = HelloModule.getMessage();
      const level = HelloModule.getBatteryLevel();

      setMsg(message);
      setBetterylevel(level);

      console.log(level, 'battery level');
    } catch (e) {
      setMsg('Error reading native module');
    }
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{msg}</Text>
      <View>
        <Text>
          Bettery Level is - {betterylevel} %
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
