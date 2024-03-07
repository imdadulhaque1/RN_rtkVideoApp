import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import globalStyles from '@constans/styles/globallyStyles';

const RelatedVideoItem = ({thumbnail, title, author, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.imgCardContainer}>
      <Image style={styles.imgStyle} source={{uri: thumbnail}} />
      <View style={styles.innerContainerStyle}>
        <Text style={styles.titleStyle}>Title: {title}</Text>
        <Text style={styles.authorStyle}>{author}</Text>
      </View>
    </Pressable>
  );
};

export default RelatedVideoItem;

const styles = StyleSheet.create({
  imgCardContainer: {
    width: '100%',
    backgroundColor: '#ededed',
    // margin: 3,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 0.5,
    marginBottom: 10,
  },
  innerContainerStyle: {
    padding: 5,
  },
  titleStyle: {
    fontSize: 12,
    color: '#000000',
  },
  authorStyle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  imgStyle: {
    height: 100,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
