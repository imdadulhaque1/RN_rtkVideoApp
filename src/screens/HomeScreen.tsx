import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface Props {}

const HomeScreen: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#ffffff'}}>IMDADUL HAQUE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});

export default HomeScreen;
