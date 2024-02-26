import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainStack from '@navigations/MainStack';
import {Provider} from 'react-redux';
import {store} from '@rtk/stores/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
