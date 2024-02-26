import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Loading = ({title}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'red'}}> {title}</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
