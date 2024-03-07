import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ComTag from '@components/ComTag';
import RelatedVideoItem from '@components/RelatedVideoItem';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRelatedVideos} from '@rtk/features/relatedVideo/RelatedVideosSlice';
import Loading from '@components/Loading';
// import globalStyles from '@constans/styles/globallyStyles';

// @ts-ignore
const RelatedVideoScreen = ({currentVideoId, tags}) => {
  const dispatch = useDispatch();
  const {relatedVideos, isLoading, isError, error} = useSelector(
    (state: any) => state.relatedVideos,
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchRelatedVideos({tags: tags, id: currentVideoId}));
  }, [dispatch, currentVideoId, tags]);

  // Decide what to render
  let content = null;
  if (isLoading) content = <Loading title="Loading.....!!!" />;
  if (!isLoading && isError)
    content = <Loading title="Sorry, Error Occurred!" />;
  if (!isLoading && !isError && relatedVideos?.length <= 0)
    content = (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Related Videos Not Found!</Text>
      </View>
    );

  if (!isLoading && !isError && relatedVideos?.length > 0)
    content = relatedVideos.map((item: any, index: any) => {
      return (
        <View key={index} style={{width: '45%'}}>
          <RelatedVideoItem
            thumbnail={item.thumbnail}
            title={item.title}
            author={item.author}
          />
        </View>
      );
    });

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-around',
      }}>
      {content}
    </View>
  );
};

export default RelatedVideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textStyle: {
    fontSize: 16,
    color: '#000000',
  },
});
