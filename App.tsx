import React, {useEffect, useState} from 'react';
import {View, Text, NativeModules, StyleSheet} from 'react-native';

// 👇 Declare the native module types (important in TS)
type HelloModuleType = {
  getMessage: () => Promise<string>;
  getBatteryLevel: () => Promise<string>;
};

// 👇 Extract & type it
const {HelloModule} = NativeModules as {
  HelloModule: HelloModuleType;
};

export default function App() {
  const [msg, setMsg] = useState('Loading...');
  const [betterylevel , setBetterylevel] = useState('');
   

  useEffect(() => {
    getbettery();
    HelloModule.getMessage()
      .then(setMsg)
      .catch(() => setMsg('Error reading native module'));
  }, []);


  const getbettery = async () => {
    let level = await HelloModule.getBatteryLevel();
    setBetterylevel(level);
    console.log(level ,'getbettery level');
  }

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
