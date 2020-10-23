import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

export default function KrKode() {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [scanned, setScanned] = useState(false);
  const [dataScanned, setDataSacanned] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function handleBarCodeScanned(scanningResult: BarCodeScannerResult) {
    setScanned(true);
    setDataSacanned(JSON.parse(scanningResult.data));

    navigation.navigate('DetailsKode', dataScanned);

    // console.log(`${scanningResult.data}`);
    // JSON.parse(scanningResult.data);
    // console.log(JSON.parse(scanningResult.data));
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
    >
      <BarCodeScanner
        type="back"
        onBarCodeScanned={handleBarCodeScanned}
        style={{
          marginHorizontal: 0,
          marginLeft: 0,
          marginStart: 0,
          paddingHorizontal: 0,
          paddingLeft: 0,
          paddingStart: 0,
          height: '115%',
          padding: 0,
        }}
      />

      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
