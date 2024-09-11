import React, {useEffect, useState} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';

import PropTypes from 'prop-types';
import {Colors, CommonStyle, Images} from '../../Theme';

export default function AsyncImage(props) {
  const [style] = useState(props.style);
  const [source, setSource] = useState(props.source);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (source !== props.source) {
      setSource(props.source);
    }
  }, [props.source]);

  function onLoadStart() {
    console.log('load start image');
    setLoaded(true);
  }
  function onLoadEnd() {
    console.log('load end image');
    setLoaded(false);
  }

  return (
    <View
      style={
        source === Images.noUse
          ? [style, {alignItems: 'center', justifyContent: 'center', flex: 1}]
          : style
      }>
      <Image
        defaultSource={Images.noUse}
        source={source}
        resizeMode={'contain'}
        style={
          source === Images.noUse
            ? [style, {resizeMode: 'contain'}]
            : [CommonStyle.resizeModeStyle, style]
        }
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={errorData => {
          let {error} = errorData.nativeEvent;
          console.log('error asyncImage => ', error);
          setLoaded(false);
          // set default image
          setSource(Images.noUse);
        }}
      />
      {loaded ? (
        <View style={CommonStyle.positionCenterAsyncImage}>
          <ActivityIndicator color={Colors.white} />
        </View>
      ) : null}
    </View>
  );
}

AsyncImage.propTypes = {
  source: PropTypes.any,
  style: PropTypes.any,
  onLoadCall: PropTypes.func,
};

AsyncImage.defaultProps = {
  source: '',
  onLoadCall: () => {},
};
