import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import ComTag from './ComTag';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTags} from '@rtk/features/tags/tagsSlice';

interface Props {}

const AllTags: FC<Props> = props => {
  const dispatch = useDispatch();
  const {tags, isLoading} = useSelector((state: any) => state.tags);
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchTags());
  }, [dispatch]);
  return tags?.length > 0 ? (
    <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
      {tags.map((tag: any, index: any) => {
        console.log(tag);

        return <ComTag key={index} tagTitle={tag.title} />;
      })}
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {},
});

export default AllTags;
