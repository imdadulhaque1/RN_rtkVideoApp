import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const ComInput = ({value, onChangeText, onPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        placeholderTextColor={'gray'}
        placeholder="Search videos"
        value={value}
        onChangeText={onChangeText}
      />
      <Pressable
        onPress={onPress}
        style={{
          backgroundColor: '#FFFFFF',
          width: '12%',
          alignItems: 'center',
        }}>
        <Icons name="magnify" color="#111111" size={30} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#111111',
    borderRadius: 6,
    alignItems: 'center',
  },
  textInputStyle: {
    color: '#111111',
    width: '88%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
});

export default ComInput;
