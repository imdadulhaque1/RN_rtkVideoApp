import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {VideoDetailsInterface} from '@src/interfaces/VideoDetailsInterface';
import {useNavigation} from '@react-navigation/native';

interface Props {
  thumbnail: string;
  title: string;
  author: string;
  likes: number;
  unlikes: number;
  description: string;
  views: string;
  duration: string;
  id: string;
}

const DetailsVideoCard: FC<Props> = ({
  thumbnail,
  title,
  author,
  likes,
  unlikes,
  description,
  views,
  duration,
  id,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgStyle} source={{uri: thumbnail}} />
      <Text style={styles.textStyle}>Title: {title}</Text>
      <Text style={styles.textStyle}>Author: {author}</Text>
      <View style={{paddingVertical: 5}}>
        <Text
          style={[styles.textStyle, {color: '#111111', fontWeight: 'bold'}]}>
          Description:
        </Text>
        <Text style={styles.textStyle}>{description}</Text>
      </View>
      <View style={{paddingVertical: 5}}>
        <Text style={styles.textStyle}>Duration: {duration}</Text>
        <Text style={styles.textStyle}>ID: {id}</Text>
        <Text style={styles.textStyle}>Views: {views}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Text style={styles.textStyle}>Like: {likes}</Text>
        <Text style={styles.textStyle}>Unlike: {unlikes}</Text>
        <Text style={styles.textStyle}>Views: {views}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c9c1e6',
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  imgStyle: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textStyle: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 14,
  },
});

export default DetailsVideoCard;
