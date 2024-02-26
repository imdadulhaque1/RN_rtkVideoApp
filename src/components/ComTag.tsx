import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ComTag = ({tagTitle}) => {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagTextStyle}>{tagTitle}</Text>
    </View>
  );
};

export default ComTag;

const styles = StyleSheet.create({
  tagContainer: {
    backgroundColor: '#c9c1e6',
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 3,
  },
  tagTextStyle: {
    color: 'black',
    alignSelf: 'center',
  },
});
