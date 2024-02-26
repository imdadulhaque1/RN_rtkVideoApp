import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, {FC, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchVideo} from '@rtk/features/video/videoSlice';
import {useNavigation, useRoute} from '@react-navigation/native';
import DetailsVideoCard from '@components/DetailsVideoCard';
import Loading from '@components/Loading';
import RelatedVideoScreen from './RelatedVideoScreen';

interface Props {}

const VideoDetailsScreen: FC<Props> = props => {
  const dispatch = useDispatch();
  const {video, isLoading, isError, error} = useSelector(state => state.video);
  const route = useRoute();
  const {id} = route.params;

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchVideo(id));
  }, [dispatch]);

  //   Decide what to render
  let content = null;

  if (isLoading) content = <Loading title="Loadingg......!!!" />;
  if (!isLoading && isError) content = <Loading title={error} />;
  if (!isLoading && !isError && !video.id)
    content = (
      <View style={styles.container}>
        <Text style={styles.textStyle}>No Video Found!</Text>
      </View>
    );

  if (!isLoading && !isError && video.id)
    content = (
      <View>
        <DetailsVideoCard
          thumbnail={video?.thumbnail}
          title={video?.title}
          author={video?.author}
          likes={video?.likes}
          unlikes={video?.unlikes}
          description={video?.description}
          views={video?.views}
          duration={video?.duration}
          id={video?.id}
          tags={video?.tags}
        />
        <RelatedVideoScreen currentVideoId={video?.id} tags={video?.tags} />
      </View>
    );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {content}
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.btnStyle}>
          <Text style={styles.textStyle}>Go Back</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default VideoDetailsScreen;
