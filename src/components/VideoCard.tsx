import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {VideoDetailsInterface} from '@src/interfaces/VideoDetailsInterface';
import {useNavigation} from '@react-navigation/native';
// import globalStyles from '@constans/styles/globallyStyles';

interface Props {
  thumbnail: string;
  title: string;
  author: string;
  likes: number;
  unlikes: number;
  onPress: any;
}

const VideoCard: FC<Props> = ({
  thumbnail,
  title,
  author,
  likes,
  unlikes,
  onPress,
}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.imgStyle} source={{uri: thumbnail}} />
      <Text style={styles.textStyle}>Title: {title}</Text>
      <Text style={styles.textStyle}>Author: {author}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Text style={styles.textStyle}>Like: {likes}</Text>
        <Text style={styles.textStyle}>Unlike: {unlikes}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c9c1e6',
    margin: 10,
    borderRadius: 10,
  },

  textStyle: {
    color: 'black',
    alignSelf: 'center',
  },

  imgStyle: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default VideoCard;
