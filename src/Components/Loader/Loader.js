/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';

import {Colors} from '../../Theme';
import PropTypes from 'prop-types';

export default function Loader(props) {
  const [loader, setLoader] = useState(props.isLoading);

  useEffect(() => {
    setLoader(props.isLoading);
  }, [props]);

  return (
    <Modal visible={loader} transparent>
      <View style={styles.container}>
        <ActivityIndicator
          size={'large'}
          style={styles.indicator}
          color={Colors.themeColorPurple}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.shadowColor,
  },
  indicator: {
    alignSelf: 'center',
  },
});

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

Loader.defaultProps = {
  isLoading: false,
};
