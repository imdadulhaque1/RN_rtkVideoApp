import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import Video from 'react-native-video';
import axiosInstances from '../axios/axiosInstances';
import axios from 'axios';
import {VideoDetailsInterface} from '@src/interfaces/VideoDetailsInterface';
import VideoCard from '@components/VideoCard';
import DetailsVideoCard from '@components/DetailsVideoCard';
import ComInput from '@components/ComInput';
import ComTag from '@components/ComTag';
import {useDispatch, useSelector} from 'react-redux';
import {fetchVideos} from '@rtk/features/videos/VideosSlice';
import Loading from '@components/Loading';
import AllTags from '@components/AllTags';

interface Props {}

const VideoScreen: FC<Props> = props => {
  const dispatch = useDispatch();
  const {videos, isLoading, isError, error} = useSelector(
    (state: any) => state.videos,
  );
  const [videoDetailsData, setVideoDetailsData] = useState<
    VideoDetailsInterface[]
  >([]);

  const [rowData, setRowData] = useState<VideoDetailsInterface>();
  const [searchValue, setSearchValue] = useState<string>();
  const [isRowDataShow, setIsRowDataShow] = useState(false);

  useEffect(() => {
    // getVideoDetails();
    // @ts-ignore
    dispatch(fetchVideos());
  }, [dispatch]);

  // console.log(rowData?.thumbnail);

  // decide what to render
  let content;
  if (isLoading) content = <Loading title="Loading.....!!!" />;
  if (!isLoading && isError) content = <Loading title={error} />;
  if (!isLoading && !isError && videos?.length <= 0)
    content = <Loading title="No Videos Found!" />;
  if (!isLoading && !isError && videos?.length > 0)
    // @ts-ignore
    content = videos.map((item, index) => {
      return (
        <VideoCard
          onPress={() => {
            console.log('item.tags: ', item.tags);

            // @ts-ignore
            setRowData(item);
            setIsRowDataShow(true);
          }}
          key={index}
          thumbnail={item.thumbnail}
          title={item.title}
          author={item.author}
          likes={item.likes}
          unlikes={item.unlikes}
        />
      );
    });

  return (
    <ScrollView>
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <ComInput
          value={searchValue}
          onChangeText={v => setSearchValue(v)}
          onPress={() => {
            console.log('Get The value: ', searchValue);
            setSearchValue('');
          }}
        />
        <AllTags />
      </View>
      {content}
      {/* {!isRowDataShow && (
        <ScrollView>
          {videoDetailsData.map((item, index) => {
            return (
              <VideoCard
                onPress={() => {
                  console.log('item.tags: ', item.tags);

                  // @ts-ignore
                  setRowData(item);
                  setIsRowDataShow(true);
                }}
                key={index}
                thumbnail={item.thumbnail}
                title={item.title}
                author={item.author}
                likes={item.likes}
                unlikes={item.unlikes}
              />
            );
          })}
        </ScrollView>
      )} */}
      {isRowDataShow && (
        <View style={styles.btnContainer}>
          <DetailsVideoCard
            thumbnail={rowData?.thumbnail}
            title={rowData?.title}
            author={rowData?.author}
            likes={rowData?.likes}
            unlikes={rowData?.unlikes}
            description={rowData?.description}
            views={rowData?.views}
            duration={rowData?.duration}
            id={rowData?.id}
          />
          <Pressable
            onPress={() => {
              setIsRowDataShow(false);
            }}
            style={styles.btnStyle}>
            <Text style={styles.textStyle}>Go Back</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    width: '90%',
    paddingVertical: 10,
    backgroundColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    color: '#ffffff',
    alignSelf: 'center',
  },
});

export default VideoScreen;
